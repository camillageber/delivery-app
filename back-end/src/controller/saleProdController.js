const saleProdService = require('../services/salesProdService');
// const { validateToken } = require('../utils/tokenManager');

const saleController = {
  
  getSalesAndProd: async (req, res) => {
    const { id } = req.params;
    const salesProd = await saleProdService.findAllSalesProd(id);
    res.status(200).json(salesProd);
  },
};

module.exports = saleController;
