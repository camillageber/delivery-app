const authService = require('../services/authService');

const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const response = await authService.login(email, password);
        console.log(response);
        return res.status(200).json(response);
    },
};

module.exports = authController;
