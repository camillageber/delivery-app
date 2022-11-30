const userSchema = (sequelize, DataTypes) => {
    const userTable = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role:DataTypes.STRING,
    }, {
        tableName: 'users',
    });

    // userTable.associate = (models) => {
    //     userTable.hasMany(models.sales, {
    //         foreignKey: ,
    //         as: ,
    //     });
    // }
    return userTable;
}

module.exports = userSchema;