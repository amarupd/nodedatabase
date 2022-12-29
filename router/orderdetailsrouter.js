const orderDetails = require("../controller/orderdetailscontroller")

const odrouter = require("express").Router();

odrouter.post('/addorder', orderDetails.addOrderdetail);

odrouter.get('/allorders', orderDetails.getAllorderdetails);

module.exports = odrouter;