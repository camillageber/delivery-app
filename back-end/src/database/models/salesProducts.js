const salesProductsSchema = (sequelize, DataTypes) => {
    const salesProductsTable = sequelize.define('salesProducts', {
        saleId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
    }, {
        tableName: 'salesProducts',
        underscored: true,
    })
    return salesProductsTable;
}

module.exports = salesProductsSchema;