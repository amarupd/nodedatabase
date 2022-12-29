const orderDetails = require("../controller/orderdetailscontroller")

const odrouter = require("express").Router();

odrouter.post('/addorderdetail', orderDetails.addOrderdetail);

odrouter.get('/allorderdetails', orderDetails.getAllorderdetails);

module.exports = odrouter;
