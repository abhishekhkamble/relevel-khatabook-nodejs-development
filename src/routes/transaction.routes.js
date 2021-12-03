const express = require("express");
const router = express.Router();
const TransactionController = require('../controllers/transaction.controller');

// Create routes add transaction auth here
router.post('/add', TransactionController.addTransaction);

//create other routes here
module.exports = router;