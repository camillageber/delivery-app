const db = require("../database/models");

const userService = {
  findUser: async (id) => {
    const user = await db.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
  },

  findCustomers: async () => {
    const userAll = await db.User.findAll({ where: { role: "customer" }, attributes: ['name'] });
  },

  findSellers: async () => {
    const userAll = await db.User.findAll({ where: { role: "seller" }, attributes: ['name'] });
  }
}

module.exports = userService;
