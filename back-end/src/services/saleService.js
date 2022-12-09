const { Op } = require('sequelize');
const db = require('../database/models');

const saleService = {

  createSale: async (orderSale) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = orderSale;
    const { productList } = orderSale;

      const sale = await db.Sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

    const order = productList.map(({ id, quantity }) => ({
      saleId: sale.id, productId: id, quantity,
    }));
    await db.SaleProduct.bulkCreate(order);
    return { saleId: sale.id };
  },

  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  findAllSales: async (id) => {
    const sales = await db.Sale.findAll({
      where: { [Op.or]: [{ userId: id }, { sellerId: id }] },
      includes: [{ model: db.Product, as: 'products' }],
    });
    return sales;
  },

  saleById: async (id) => {
    const sale = await db.Sale.findOne({ 
      where: { id }, includes: [{ model: db.Product, as: 'products' }] });
    return sale;
  },

  updateSale: async (id, status) => {
    const update = await db.Sale.update({ status }, { where: { id } });
    return update;
  },
};

module.exports = saleService;
