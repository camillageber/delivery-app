const saleService = require('../services/saleService');

const saleController = {
  createSale: async (req, res) => {
    const sale = await saleService.createSale(req.body);
    res.status(201).json(sale);
  },
  getSellers: async(req, res) => {
    const sellers = await saleService.getSellers();
    res.status(200).json(sellers);
  }
};

module.exports = saleController;
