'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(4,2),
                allowNull: false,
            },
            urlImage: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },{
            timestamps: false,
          });

        down: async (queryInterface, Sequelize) => {
            await queryInterface.dropTable('products');
        }
    }
}