const express = require('express');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const saleProdController = require('../controller/saleProdController');

const router = express.Router();

router.get('/:id', tokenMiddleware, saleProdController.getSalesAndProd);

module.exports = router;