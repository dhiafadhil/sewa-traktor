module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            authId: {
                type: DataTypes.INTEGER,
            },
            userName: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            displayName: {
                type: DataTypes.STRING,
            },
            location: {
                type: DataTypes.STRING,
            },
            phoneNumber: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
        },
        {
            freezeTableName: true,
        }
    );


    return users;
}