module.exports=(sequelize,DataTypes)=>{
    const Orders=sequelize.define("orders",{
        customerNumber:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        checkNumber:{
            type:DataTypes.STRING,
            allowNull:false
        },
        paymentDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        amount:{
            type:DataTypes.FLOAT,
            allowNull:false
        }
    });
    return Orders;
}