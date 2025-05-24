const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
    methodName: { type: String, unique: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);
  