const { Router } = require('express');
const userController = require('../controller/userController');

const router = Router();

router.get('/', userController.findCustomers);

router.get('/seller', userController.findSellers);

router.get('/:id', userController.findUser);

module.exports = router;
