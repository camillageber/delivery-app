import { Model, DataTypes } from 'sequelize';
import database from '.';

class Sales extends Model {}

Sales.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
        model: 'users',
        key: 'id'
    }
  },
  sellerId: {
    allowNull: false,
    type: DataTypes.STRING,
    references: {
        model: 'users',
        key: 'id'
    }
  },
  totalPrice: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  deliveryAddress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  deliveryNumber: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  saleDate: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  modelName: 'sales',
  timestamps: false,
  sequelize: database,
  tableName: 'sales',
  underscored: true
});

export default Sales;