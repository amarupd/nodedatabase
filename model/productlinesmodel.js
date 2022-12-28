module.exports=(sequelize,DataTypes)=>{
    const Productlines=sequelize.define("productlines",{
        productLine:{
            type:DataTypes.STRING,
            allowNull:false
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
    });
    return Productlines;
}