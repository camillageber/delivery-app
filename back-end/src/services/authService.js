const db = require('../database/models');
const { NotFoundError } = require('../errors/NotFoundError');
const verifyHash = require('../utils/verifyPassword');

const authService = {
    login: async (email, password) => {
        const user = await db.User.findOne({ where: { email } });
        if (!user) throw new NotFoundError('Usuário não encontrado!');
        const hashDB = user.password;
        const validLogin = verifyHash(hashDB, password);
        return validLogin;
    },
    
};

module.exports = authService;
