const md5 = require('md5');
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
          const { password: _, ...userWithoutPassword } = createdUser.toJSON();
        const token = generateToken(userWithoutPassword);
        const retorno = {
            token, 
            name: userWithoutPassword.name,
            role: userWithoutPassword.role,
            email: userWithoutPassword.email,
        };
        return retorno;
    },
    
};

module.exports = registerService;
