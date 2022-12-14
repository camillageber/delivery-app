const saleService = require('../services/saleService');
// const { validateToken } = require('../utils/tokenManager');

const saleController = {
  createSale: async (req, res) => {
    const sale = await saleService.createSale(req.body);
    res.status(201).json(sale);
  },

  getSellers: async (req, res) => {
    const sellers = await saleService.getSellers();
    res.status(200).json(sellers);
  },

  findAllSales: async (req, res) => {
    console.log(res.user, 'res.data do controller');
    const { id } = res.user;
    const sales = await saleService.findAllSales(id);
    res.status(200).json(sales);
  },

  saleById: async (req, res) => {
    const { id } = req.params;
    const sale = await saleService.saleById(id);
    res.status(200).json(sale);
  },

  updateSale: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const update = await saleService.updateSale(id, status);
    res.status(200).json(update);
  },
};

module.exports = saleController;
