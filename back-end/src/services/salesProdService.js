const db = require('../database/models');

const saleProdService = {
    infoProd: async (id) => {
        const data = await db.Product.findOne({ where: id });
        return data.dataValues;
    },
  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  findAllSalesProd: async (id) => {
    console.log(id);
    const sales = await db.SaleProduct.findAll({
        where: { saleId: id },
        includes: [{ 
            model: db.Product,
            as: 'products',
            through: { attributes: [] },
             }],
      });
    return sales;
  },
};

module.exports = saleProdService;
