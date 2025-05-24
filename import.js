const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');

const Customer = require('../crud/models/customer.model');
const Product = require('../crud/models/product.model');
const Region = require('../crud/models/region.model');
const PaymentMethod = require('../crud/models/payment.model');
const Order = require('../crud/models/order.model');
const OrderItem = require('../crud/models/orderitem.model');

mongoose.connect('mongodb://localhost:27017/salesdb', { useNewUrlParser: true, useUnifiedTopology: true });

const results = [];

fs.createReadStream('sales_data.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', async () => {
    for (const row of results) {
      try {
        
        // 1. Handle Customer
        const customer = await Customer.findOneAndUpdate(
          { email: row['Customer Email'] },
          {
            customerId: row['Customer ID'],
            name: row['Customer Name'],
            email: row['Customer Email'],
            address: row['Customer Address'],
          },
          { upsert: true, new: true }
        );

        // 2. Handle Product
        const product = await Product.findOneAndUpdate(
          { productId: row['Product ID'] },
          {
            productId: row['Product ID'],
            name: row['Product Name'],
            category: row['Category'],
          },
          { upsert: true, new: true }
        );

        // 3. Handle Region
        const region = await Region.findOneAndUpdate(
          { regionName: row['Region'] },
          { regionName: row['Region'] },
          { upsert: true, new: true }
        );

        // 4. Handle Payment Method
        const paymentMethod = await PaymentMethod.findOneAndUpdate(
          { methodName: row['Payment Method'] },
          { methodName: row['Payment Method'] },
          { upsert: true, new: true }
        );

        // 5. Handle Order
        const order = await Order.findOneAndUpdate(
          { orderId: row['Order ID'] },
          {
            orderId: row['Order ID'],
            customer: customer._id,
            region: region._id,
            paymentMethod: paymentMethod._id,
            dateOfSale: new Date(row['Date of Sale']),
            shippingCost: parseFloat(row['Shipping Cost']),
          },
          { upsert: true, new: true }
        );

        // 6. Handle Order Item
        await OrderItem.create({
          order: order._id,
          product: product._id,
          quantitySold: parseInt(row['Quantity Sold']),
          unitPrice: parseFloat(row['Unit Price']),
          discount: parseFloat(row['Discount']),
        });

        console.log(`Imported order: ${row['Order ID']}`);
      } catch (err) {
        console.error(`Error importing row ${row['Order ID']}:`, err.message);
      }
    }

    console.log('Import complete');
    mongoose.disconnect();
  });
