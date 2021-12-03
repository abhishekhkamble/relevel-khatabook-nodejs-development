const express = require("express");
const router = express.Router();
const CustomerController = require('../controllers/customer.controller');

// Create routes add customer auth here
router.post('/add', CustomerController.addCustomer);

//create other routes here
module.exports = router;