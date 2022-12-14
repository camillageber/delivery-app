const { validateToken } = require('../utils/tokenManager');

const handleAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const { id } = await validateToken(token);
  
  res.data.id = id;
  return next();
};

module.exports = handleAuth;