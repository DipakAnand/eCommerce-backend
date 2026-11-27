const express = require('express');
const {getProducts, createProduct} = require('../controllers/product.controllers');

const {validateProduct}  = require('../middleware/product.validate');
const router = express.Router();

router.get('/', getProducts);
router.post("/", validateProduct, createProduct);

module.exports = router;