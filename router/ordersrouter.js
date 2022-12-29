const order = require("../controller/orderscontroller")

const odrrouter = require("express").Router();

odrrouter.post('/addorder', order.addOrders);

odrrouter.get('/allorders', order.getAllorders);

module.exports = odrrouter;