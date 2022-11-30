const sequelize = require('sequelize');

const User = (sequelize, DataTypes) =>{
  const User = sequelize.define("User",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    sequelize: database,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sales, { foreignKey: 'userId', as: 'userId'},
     { foreignKey: 'sellerId', as: 'sellerId'})
  }
};

export default User;