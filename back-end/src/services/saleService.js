const db = require('../database/models');

const saleService = {
  findUser: async (id) => {
    const user = await db.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
  },

createSale: async (orderSale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = orderSale;
   const { productList } = orderSale;

  //  const user = saleService.findUser(userId);

      const sale = await db.Sale.create({ 
      userId,
      sellerId, 
      totalPrice, 
      deliveryAddress, 
      deliveryNumber, 
      saleDate: new Date(), 
      status: 'Pendente' });

    const order = productList.map(({ id, quantity }) => ({ 
      saleId: sale.id, productId: id, quantity }));
    await db.SaleProduct.bulkCreate(order);
    return { saleId: sale.id };
  },

};

module.exports = saleService;
