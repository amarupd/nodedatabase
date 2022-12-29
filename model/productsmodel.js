module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define("products",{
        productCode:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productLine:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productScale:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productVendor:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        quantityInStock:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        buyPrice:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        MSRP:{
            type:DataTypes.FLOAT,
            allowNull:false
        }
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Product;
}