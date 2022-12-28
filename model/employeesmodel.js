module.exports=(sequelize,DataTypes)=>{
    const Employee=sequelize.define("employee",{
        employeeNumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        extension:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        officeCode:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reportsTo:{
            type:DataTypes.INTEGER,
        },
        jobTitle:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
    ,
    {
        createdAt: false,
        updatedAt: false
    });
    return Employee;
}