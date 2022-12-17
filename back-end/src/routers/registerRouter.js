const { Router } = require('express');
const registerController = require('../controller/registerController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const router = Router();

router.post('/', registerController.register);
router.post('/adm', tokenMiddleware, registerController.admRregister);
router.get('/', tokenMiddleware, registerController.getAllUsers);

module.exports = router;