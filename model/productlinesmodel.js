module.exports=(sequelize,DataTypes)=>{
    const Productlines=sequelize.define("productlines",{
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
    return Productlines;
}