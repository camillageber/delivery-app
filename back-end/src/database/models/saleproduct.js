const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'sale_id'
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'product_id'
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'sales_products',
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