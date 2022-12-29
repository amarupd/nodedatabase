const order = require("../controller/orderscontroller")

const odrrouter = require("express").Router();

odrouter.post('/addorder', order.addOrders);

odrouter.get('/allorders', order.getAllorders);

module.exports = odrrouter;