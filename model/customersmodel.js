module.exports=(sequelize,DataTypes)=>{
    const Customer=sequelize.define("customer",{
        customerNumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        customerName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contactLastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contactFirstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        addressLine1:{
            type:DataTypes.STRING,
            allowNull:false
        },
        addressLine2:{
            type:DataTypes.STRING,
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false
        },
        state:{
            type:DataTypes.STRING,
        },
        postalCode:{
            type:DataTypes.STRING
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        salesRepEmployeeNumber:{
            type:DataTypes.INTEGER
        },
        creditLimit:{
            type:DataTypes.FLOAT
        }  
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Customer;
}