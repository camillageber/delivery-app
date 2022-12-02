const db = require('../database/models');
const CreateError = require('../utils/createError');
const verifyHash = require('../utils/verifyPassword');
const { generateToken } = require('../utils/tokenManager');

const registerService = {
    register: async (name, email, password) => {
        const user = await db.User.findOne({ where: { name, email } });
        if (user) {
            throw new CreateError('ConflictError', 'Conflito: Usuário já cadastrado');
        }
        const hashDB = user.password;
        const senhaValidada = verifyHash(hashDB, password);
        const createdUser = await db.User
          .create({ name, email, password: senhaValidada, role: '' });
        const token = await generateToken({ id: createdUser.id });
        return { token };
    },
    
};

module.exports = registerService;
