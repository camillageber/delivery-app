const db = require('../database/models');
const CreateError = require('../utils/createError');

const userService = {
    getUser: async (email) => {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            throw new CreateError('NotFoundError', 'Usuário não encontrado');
        }
        return user;
    },
    
};

module.exports = userService;
