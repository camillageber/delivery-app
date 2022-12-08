const express = require('express');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const saleController = require('../controller/saleController');

const router = express.Router();

router.post('/', tokenMiddleware, saleController.createSale);

module.exports = router;