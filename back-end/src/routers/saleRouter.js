const express = require('express');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const saleController = require('../controller/saleController');

const router = express.Router();

router.post('/', tokenMiddleware, saleController.createSale);

router.get('/', tokenMiddleware, saleController.findAllSales);

router.get('/:id', tokenMiddleware, saleController.saleById);

router.put('/:id', tokenMiddleware, saleController.updateSale);

module.exports = router;