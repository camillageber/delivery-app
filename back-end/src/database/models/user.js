const sequelize = require('sequelize');

const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    },{
        timestamps: false,
        tableName: "users"
    })
    return User;
}

module.exports = User;
