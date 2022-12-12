const userService = require('../services/userService');

const userController = {
 getUser: async (req, res) => {
        const { email } = req.body;
        const response = await userService.getUser(email);
        return res.status(200).json(response);
    },
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
