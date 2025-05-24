const express =  require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// user routes
router.get('/total-customers',userController.getTotalCustomers);


module.exports= router;


