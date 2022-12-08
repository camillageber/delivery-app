const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'salesProducts',
    underscored: true,
    timestamps: false,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SaleProduct
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SaleProduct
    });
  };

  return SaleProduct;
}

module.exports = SaleProduct;