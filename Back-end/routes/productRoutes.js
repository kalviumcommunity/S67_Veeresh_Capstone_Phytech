const {createProduct, getProductById, getAllProducts} = require('../Controllers/productControll')

router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;