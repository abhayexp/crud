const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerId: { type: String, unique: true },
  name: String,
  email: { type: String, unique: true },
  address: String,
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
