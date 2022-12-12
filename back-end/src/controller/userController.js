const userService = require('../services/userService');

const userController = {
    getUser: async (req, res) => {
        const { email } = req.body;
        const response = await userService.getUser(email);
        return res.status(200).json(response);
    },
};

module.exports = userController;
