const JWT = require('jsonwebtoken');
require('dotenv/config');
const CreateError = require('./createError');

const JWT_SECRET = '../../jwt.evaluation.key';

const generateToken = (payload) => {
  const token = JWT.sign(payload, JWT_SECRET);
  return token;
};

const validateToken = (token) => {
  const decoded = JWT.verify(token, JWT_SECRET);
  if (!decoded) {
    throw new CreateError('UnauthorizedError', 'Token inválido');
  }
  return decoded;
};

module.exports = { generateToken, validateToken };
