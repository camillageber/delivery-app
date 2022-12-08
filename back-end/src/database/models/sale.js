const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field:'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente'

    },

  }, {
    underscored: true,
    timestamps: false,
    tableName: "sales",
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' }
    )
    Sale.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'seller' }
    )
  };

  return Sale;
};

module.exports = Sale;