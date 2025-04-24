const express = require('express');
const router = express.Router();
const {createProduct, getProductById, getAllProducts} = require('../Controllers/productControll')


router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;