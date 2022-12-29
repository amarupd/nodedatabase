module.exports = (sequelize, DataTypes) => {
    const Offices = sequelize.define("offices", {
        officeCode: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine2: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        territory: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            createdAt: false,
            updatedAt: false
        });
    return Offices;
}