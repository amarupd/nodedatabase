module.exports=(sequelize,DataTypes)=>{
    const Order=sequelize.define("orders",{
        orderNumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
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
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Order;
}