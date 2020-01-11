module.exports = (sequelize, DataTypes) => {
    const tokens = sequelize.define('tokens', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            authId: {
                type: DataTypes.INTEGER,
            },
            token: {
                type: DataTypes.STRING,
            },
        },
        {
            freezeTableName: true,
        }
    );


    return tokens;
}