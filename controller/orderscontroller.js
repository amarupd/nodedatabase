const db=require("../model");


//create our main model

const Order = db.orders
console.log("we are here");


//creating product

const addOrders= async (req, res) => {
    let info = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        priceEach: req.body.priceEach,
        orderLineNumber: req.body.orderLineNumber
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