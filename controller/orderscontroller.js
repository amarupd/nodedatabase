const db = require("../model");


//create our main model

const Order = db.orders



//creating product

const addOrders = async (req, res) => {
    let info = {
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        requiredDate: req.body.requiredDate,
        shippedDate: req.body.shippedDate,
        status: req.body.status,
        comments: req.body.comments,
        customerNumber: req.body.customerNumber
    }

    const order = await Order.create(info)
    res.status(200).send(order)
}

//get all products

const getAllorders = async (req, res) => {
    console.log("we are in getAllorders");
    let orders = await Order.findAll({})
    res.status(200).send(orders)
    console.log("fetched all the orders");
}


module.exports = {
    addOrders,
    getAllorders
};