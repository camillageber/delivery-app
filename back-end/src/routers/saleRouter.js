const express = require('express');
/* const tokenMiddleware = require('../middlewares/tokenMiddleware'); */
const saleController = require('../controller/saleController');

const router = express.Router();

router.post('/', /* tokenMiddleware */ saleController.createSale);
router.get('/sellers', /* tokenMiddleware */ saleController.getSellers);

module.exports = router;