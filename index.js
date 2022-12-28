const dbConn = require("./config/dbcon");

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
// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.products = require("./productModel")(sequelize, DataTypes);
// db.reviews = require("./reviewsModel")(sequelize, DataTypes);

// db.sequelize.sync({ force: false })
//     .then(() => {
//         console.log('resync done');
//     })


// // 1 to many relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })

// module.exports = db;
