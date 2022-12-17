const registerService = require('../services/registerService');
const isValidAdm = require('../utils/isValidAdm');

const registerController = {
    register: async (req, res) => {
        const { name, email, password } = req.body;
        const response = await registerService.register(name, email, password);
        console.log(response);
        return res.status(201).json(response);
    },

    admRregister: async (req, res) => {
        const admChecker = isValidAdm(res);
        if (!admChecker) {
            return res.status(401).json({ message: 'Não autorizado' });
        }
        const { name, email, password, role } = req.body;
        const response = await registerService.admRregister(name, email, password, role);
        if (!response) {
            return res.status(409).json({ message: 'Conflito: Usuário já cadastrado' });
        }
        return res.status(201).json(response);
    },

    getAllUsers: async (req, res) => {
        const admChecker = isValidAdm(res);
        if (!admChecker) {
            return res.status(401).json({ message: 'Não autorizado' });
        }
        const response = await registerService.getAllUsers();
        return res.status(200).json(response);
    },
};

module.exports = registerController;