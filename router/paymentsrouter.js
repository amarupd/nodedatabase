const payments = require("../controller/paymentscontroller")

const payrouter = require("express").Router();

payrouter.post('/addPayment', payments.addPayment);

payrouter.get('/getAllpayments', payments.getAllpayments);

router.get('/get',payments.getOne);


module.exports = payrouter;

