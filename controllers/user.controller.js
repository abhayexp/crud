const mongoose = require("mongoose");
const userService = require("../services/user.service");
const Customer = require('../models/Customer');


exports.getTotalCustomers = async (req, res, next) => {
  try {
    const count = await Customer.countDocuments();
    res.status(200).json({ totalCustomers: count });
  } catch (err) {
    next(err)
  }
};

