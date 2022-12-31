const db = require("../model");


//create our main model vvv

const Payment = db.payments



//creating product

const addPayment = async (req, res) => {
    let info = {
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        requiredDate: req.body.requiredDate,
        shippedDate: req.body.shippedDate
    }

    const payment = await Payment.create(info)
    res.status(200).send(payment)
}

//get all products

const getAllpayments = async (req, res) => {
    console.log("we are in getAllorders");
    let payments = await Payment.findAll({})
    res.status(200).send(payments)
    console.log("fetched all the payments");
}


module.exports = {
    addPayment,
    getAllpayments
};