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

//sequelize table for customer table

db.customers = require("./customersmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync customer done');
    })

//sequelize table for employee table

db.employees = require("./employeesmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync employee done');
    })

//sequelize table for office table

db.offices = require("./officesmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync offices done');
    })

//sequelize table for orderDetails table

db.orderdetails = require("./orderdetailsmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync offices done');
    })
//sequelize table for orders table

db.orders = require("./ordersmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync orders done');
    })

//sequelize table for payments table

db.payments = require("./paymentsmodel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync orders done');
    })

module.exports = db;
