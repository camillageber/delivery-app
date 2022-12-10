const db = require('../database/models');

const userService = {
  findUser: async (id) => {
    const user = await db.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
  },

  findCustomers: async () => {
    const userAllCustomers = await db.User.findAll({ 
      where: { role: 'customer' }, attributes: ['name'] });
    return userAllCustomers;
  },

  findSellers: async () => {
    const userAllSellers = await db.User.findAll({ 
      where: { role: 'seller' }, attributes: ['name'] });
    return userAllSellers;
  },
};

module.exports = userService;
