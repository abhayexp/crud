const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, unique: true },
    order_date: Date,
    region: String,
    payment_method: String,
    shipping_cost: Number,
    discount: Number,
    quantity_sold: Number,
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

  module.exports = mongoose.model('Order', orderSchema);