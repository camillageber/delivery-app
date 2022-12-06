const db = require('../database/models');

const productService = {
    getAll: async () => {
        const products = await db.Product.findAll();
        return products;
    },
};

module.exports = productService;