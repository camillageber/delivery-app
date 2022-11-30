const { users } = require('../database/models');
const { MissingParamError } = require('../errors/MissingParamError');
const { NotFoundError } = require('../errors/NotFoundError');

const login = async (requestBody) => {
    const { email, password } = requestBody;
    if (!email || !password) {
        throw new MissingParamError('Todos os campos precisam ser preenchidos!');
    }
    const user = await users.findOne({ where: email, password },
        { atributes: { exclude: ['password'] } });
    if (!user) throw new NotFoundError('Usuário não encontrado!');

    return { user };
};

module.exports = { login };
