const { Router } = require('express');
const userController = require('../controller/userController');

const router = Router();

router.get('/', userController.getUser);

module.exports = router;