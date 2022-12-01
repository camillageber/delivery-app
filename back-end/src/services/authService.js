const db = require('../database/models');
const CreateError = require('../utils/createError');
const verifyHash = require('../utils/verifyPassword');

const authService = {
    login: async (email, password) => {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            throw new CreateError('NotFoundError', 'Usuário não encontrado');
        }
        const hashDB = user.password;
        const validLogin = verifyHash(hashDB, password);
        return validLogin;
    },
    
};

module.exports = authService;
