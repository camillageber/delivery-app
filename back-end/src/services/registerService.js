const md5 = require('md5');
const { Op } = require('sequelize');
const db = require('../database/models');
const CreateError = require('../utils/createError');
const { generateToken } = require('../utils/tokenManager');

const registerService = {
    register: async (name, email, password) => {
        const user = await db.User.findOne({ where: { name, email } });
        if (user) {
            throw new CreateError('ConflictError', 'Conflito: Usuário já cadastrado');
        }
        const senhaValidada = md5(password);
        const createdUser = await db.User
            .create({ name, email, password: senhaValidada, role: 'customer' });
        //   const { password: _, ...userWithoutPassword } = createdUser;
        const token = generateToken({
            id: createdUser.id, email: createdUser.email, name, role: createdUser.role,
        });
        const retorno = {
            token,
            name,
            role: createdUser.role,
            email,
        };
        return retorno;
    },

    admRregister: async (name, email, password, role) => {
        const user = await db.User.findOne({ where: { name, email } });
        if (user) {
            throw new CreateError('ConflictError', 'Conflito: Usuário já cadastrado');
        }
        const encrypted = md5(password);
        await db.User.create({ name, email, password: encrypted, role });
        return true;
    },

    getAllUsers: async () => {
        const users = await db.User.findAll({
            where: { role: { [Op.not]: 'administrator' } },
            attributes: { exclude: ['password'] },
        });

        return users;
    },
};

module.exports = registerService;
