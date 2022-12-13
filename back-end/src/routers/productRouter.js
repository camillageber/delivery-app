const { Router } = require('express');
const productController = require('../controller/productController');

const router = Router();

router.get('/', productController.getAll);

router.post('/', productController.create);

router.get('/:id', productController.findById);

router.delete('/:id', productController.deleteProduct);

module.exports = router;