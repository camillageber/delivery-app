const JWT = require('jsonwebtoken');
const fs = require('fs');
require('dotenv/config');
const CreateError = require('./createError');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key',
            { encoding: 'utf8', flag: 'r' });

const generateToken = (payload) => {
  const token = JWT.sign(payload, JWT_SECRET);
  console.log(JWT_SECRET);
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
