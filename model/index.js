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

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('resync done');
    })


module.exports = db;
