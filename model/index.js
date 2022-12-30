const dbConn = require("../config/dbcon");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConn.database,
    dbConn.user,
    dbConn.password,
    {
        host: dbConn.host,
        dialect: dbConn.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConn.pool.max,
            min: dbConn.pool.min,
            acquire: dbConn.pool.acquire,
            idle: dbConn.pool.idle

        }
    }
)
sequelize.authenticate()
    .then(() => {
        console.log('connected to database');
    })
    .catch(err => {
        console.log('error:' + err);
    })
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize



db.customers = require("./customersmodel")(sequelize, DataTypes);
db.employees = require("./employeesmodel")(sequelize, DataTypes);
db.offices = require("./officesmodel")(sequelize, DataTypes);
db.orderdetails = require("./orderdetailsmodel")(sequelize, DataTypes);
db.orders = require("./ordersmodel")(sequelize, DataTypes);
db.payments = require("./paymentsmodel")(sequelize, DataTypes);
db.productlines = require("./productlinesmodel")(sequelize, DataTypes);
db.products = require("./productsmodel")(sequelize, DataTypes);


//sequelize table for customer table

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync customer done');
    })

//sequelize table for employee table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync employee done');
    })

//sequelize table for office table



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync offices done');
    })



//sequelize table for orderDetails table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync offices done');
    })
//sequelize table for orders table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync orders done');
    })

//sequelize table for payments table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync orders done');
    })

//sequelize table for productlines table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync orders done');
    })
db.productlines.hasMany(db.products, {
    foreignKey: 'productLine'
})

db.products.belongsTo(db.productlines, {
    foreignKey: 'productLine'
})
//sequelize table for products table


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync products done');
    })
db.products.hasMany(db.orderdetails, {
    foreignKey: 'productCode'
})

db.orderdetails.belongsTo(db.products, {
    foreignKey: 'productCode'
})
// one to many

module.exports = db;
