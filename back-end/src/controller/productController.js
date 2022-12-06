const productService = require('../services/productService');

const productController = {
    getAll: async (_req, res) => {
        const response = await productService.getAll();
        return res.status(200).json(response);
    },
};

module.exports = productController;