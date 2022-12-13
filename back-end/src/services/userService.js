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
    const sellers = await db.User.findAll({ where: { role: "seller"}, attributes: { exclude: ['password'] } });
    return sellers;
  },
};

module.exports = userService;
