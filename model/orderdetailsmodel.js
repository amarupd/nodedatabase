module.exports=(sequelize,DataTypes)=>{
    const Orderdetails=sequelize.define("orderdetails",{
        orderNumber:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        productCode:{
            type:DataTypes.STRING,
            allowNull:false
        },
        quantityOrdered:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        priceEach:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        orderLineNumber:{
            type:DataTypes.BOOLEAN
        }
    });
    return Orderdetails;
}