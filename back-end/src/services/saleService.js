const sequelize = require('sequelize');
const db = require('../database/models');

const saleService = {
  findUser: async (email) => {
    const user = await db.User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
    return user;
  },

createSale: async (orderSale) => {
  const [{ email, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
   }, { orderList }] = orderSale;

   const user = saleService.findUser(email);

   const finishedSale = await sequelize.transaction(async (t) => {
    const sale = await db.Sale.create({ 
      userId: user.id, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }, 
      { transaction: t });
    const order = orderList.map(({ id, quantity }) => ({ 
      saleId: sale.id, productId: id, quantity }));
    await db.SaleProduct.bulkCreate(order, { transaction: t });
    return { saleId: sale.id };
  });
  return finishedSale;
  },

};

module.exports = saleService;
