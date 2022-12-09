const JWT = require('jsonwebtoken');
require('dotenv/config');
const CreateError = require('./createError');

const JWT_SECRET = '../../jwt.evaluation.key' || 'secret_key';

const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = JWT.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = async (token) => {
  const decoded = JWT.verify(token, JWT_SECRET);
  if (!decoded) {
    throw new CreateError('UnauthorizedError', 'Token inválido');
  }
  return decoded;
};

module.exports = { generateToken, validateToken };
