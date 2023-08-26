const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');

router
  .route('/')
  .get(ordersController.getAllOrders)
  .post(ordersController.addOrder)

module.exports = router;