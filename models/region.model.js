const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
    regionName: { type: String, unique: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Region", regionSchema);
  
  