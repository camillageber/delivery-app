const { validateToken } = require('../utils/tokenManager');

const handleAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  
    const decoded = await validateToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    res.body.data = decoded;
    return next();
};

module.exports = handleAuth;