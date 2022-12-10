const userService = require('../services/userService');

const userController = {
  findUser: async (req, res) => {
    const { id } = req.params;
    const user = await userService.findUser(id);
    res.status(200).json(user);
  },

  findCustomers: async (req, res) => {
    const userAll = await userService.findCustomers();
    res.status(200).json(userAll);
  },

  findSellers: async (req, res) => {
    const userAll = await userService.findSellers();
    res.status(200).json(userAll);
  },
};

module.exports = userController;
