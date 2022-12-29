module.exports=(sequelize,DataTypes)=>{
    const Productline=sequelize.define("productlines",{
        productLine:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        textDescription:{
            type:DataTypes.STRING
        },
        htmlDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        image:{
            type:DataTypes.BLOB
        }
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Productline;
}