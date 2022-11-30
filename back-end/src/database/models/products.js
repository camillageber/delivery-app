const productsSchema = (sequelize, DataTypes) => {
    const productsTable = sequelize.define('products', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        urlImage: DataTypes.STRING,
    }, {
        tableName: 'products',
        underscored: true,
    })
    return productsTable;
}

module.exports = productsSchema;