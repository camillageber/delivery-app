const userService = require('../services/userService');

const userController = {
    login: async (req, res) => {
        const requestBody = req.body;
        const response = await userService.login(requestBody);
        return res.status(200).json(response);
    },
}

module.exports = userController;
