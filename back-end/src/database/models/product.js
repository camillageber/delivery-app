const sequelize = require('sequelize');

const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL(4,2),
        urlImage: {
            type: DataTypes.STRING,
            field: 'url_image'
        }
    },{
        timestamps: false,
        tableName: "products"
    })
    return Product;
}

module.exports = Product;
