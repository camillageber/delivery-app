const registerService = require('../services/registerService');

const registerController = {
    register: async (req, res) => {
        const { name, email, password } = req.body;
        const response = await registerService.register(name, email, password);
        console.log(response);
        return res.status(201).json(response);
    },
};

module.exports = registerController;