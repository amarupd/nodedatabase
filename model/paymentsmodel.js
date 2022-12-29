module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("payments", {
        customerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        checkNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
        {
            createdAt: false,
            updatedAt: false
        });
    return Payment;
}