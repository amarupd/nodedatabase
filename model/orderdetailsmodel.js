module.exports=(sequelize,DataTypes)=>{
    const Orderdetails=sequelize.define("orderdetails",{
        orderNumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        productCode:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        quantityOrdered:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        priceEach:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        orderLineNumber:{
            type:DataTypes.BOOLEAN
        }
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Orderdetails;
}