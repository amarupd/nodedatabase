const order = require("../controller/orderscontroller")

const odrrouter = require("express").Router();

odrrouter.post('/addorder', order.addOrders);

odrrouter.get('/allorders', order.getAllorders);

odrrouter.get('/get',order.getOne);


module.exports = odrrouter;
