const saleService = require('../services/saleService');

const saleController = {
  createSale: async (req, res) => {
    const sale = await saleService.createSale(req.body);
    res.status(201).json(sale);
  },

};

module.exports = saleController;
