module.exports=(sequelize,DataTypes)=>{
    const Orders=sequelize.define("orders",{
        orderNumber:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        orderDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        requiredDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        shippedDate:{
            type:DataTypes.DATE
        },
        status:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        comments:{
            type:DataTypes.TEXT
        },
        customerNumber:{
            type:DataTypes.NUMBER,
            allowNull:false
        }
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Orders;
}