const db = require('../database/models');

const productService = {
    getAll: async () => {
        const products = await db.Product.findAll();
        return products;
    },

    create: async ({ name, price, urlImage }) => {
        const createProducts = await db.Product.create({ name, price, urlImage });
        return createProducts;
    },

    findById: async (id) => {
        const products = await db.Product.findByPk(id);
        return products
    },

    deleteProduct: async (id) => {
        await db.Product.destroy({ where: { id } })
    }
};

module.exports = productService;