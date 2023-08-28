const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.getManyProducts);
router.get('/:id', productsController.getOneProduct);

module.exports = router;