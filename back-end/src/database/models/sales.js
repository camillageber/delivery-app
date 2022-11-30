const salesSchema = (sequelize, DataTypes) => {
    const salesTable = sequelize.define('sales', {
        userId: DataTypes.INTEGER,
        sellerId: DataTypes.INTEGER,
        totalPrice: DataTypes.DECIMAL,
        deliveryAddress: DataTypes.STRING,
        deliveryNumber: DataTypes.STRING,
        saleDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        tableName: 'sales',
        underscored: true,
    })
    return salesTable;
}

module.exports = salesSchema;