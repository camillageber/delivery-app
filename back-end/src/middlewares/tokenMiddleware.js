const { validateToken } = require('../utils/tokenManager');

const handleAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const user = await validateToken(token);
  console.log(user, 'user');
  
  res.user = user;
  return next();
};

module.exports = handleAuth;