const productService = require('../services/productService');

const productController = {
    getAll: async (_req, res) => {
        const response = await productService.getAll();
        return res.status(200).json(response);
    },

    create: async (req, res) => {
        const { name, price, urlImage } = req.body;
        const response = await productService.create({ name, price, urlImage });
        return res.status(201).json(response);
    },

    findById: async () => {
        const { id } = req.params;
        const response = await productService.findById(id);
        return res.status(200).json(response);
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        await productService.deleteProduct(id);
        return res.status(204).json();
    }
};

module.exports = productController;