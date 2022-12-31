const db=require("../model");


//create our main model

const OrderDetail = db.orderdetails



//creating product ...

const addOrderdetail= async (req, res) => {
    let info = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        priceEach: req.body.priceEach,
        orderLineNumber: req.body.orderLineNumber
    }

    const orderdetails = await OrderDetail.create(info)
    res.status(200).send(orderdetails)
}

//get all products

const getAllorderdetails = async (req, res) => {
    console.log("we are in getAllorderdetail");
    let orderdetails = await OrderDetail.findAll({})
    res.status(200).send(orderdetails)
    console.log("fetched all the orderDetails");
}


module.exports = {
    addOrderdetail,
    getAllorderdetails
};