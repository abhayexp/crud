
const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantitySold: { type: Number },
    unitPrice: { type: Number },
    discount: { type: Number }, // e.g., 0.1 = 10%
  }, { timestamps: true });
  
module.exports = mongoose.model("OrderItem", orderItemSchema);
  