const payments = require("../controller/paymentscontroller")

const payrouter = require("express").Router();

payrouter.post('/addPayment', payments.addPayment);

payrouter.get('/getAllpayments', payments.getAllpayments);

payrouter.get('/getpay',payments.getOne);


module.exports = payrouter;

