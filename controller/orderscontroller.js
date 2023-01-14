const db = require("../model");


//create our main model

const Order = db.orders

const redis = require("redis");

const redisPort = "redis://127.0.0.1:6379"
// const redisPort = "redis://default:ovDFb4qIVC7PoaIdIDlsaE4ymM97Aaf3@redis-12561.c264.ap-south-1-1.ec2.cloud.redislabs.com:12561"
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})


/******************************************************************************************************************************* */

const getOne = async (req, res) => {
    const id = req.query.id
    try {
        client.get(id, async (err, customer) => {
            if (err) throw err;
            if (customer) {
                console.log("catched from redis");
                res.status(200).send({
                    customer: JSON.parse(customer),
                    message: " customer retrieved from the cache"
                });
            }
            else {
                let customer = await Order.findOne({ where: { orderNumber: id } })
                client.setex(id,600,JSON.stringify(customer));
                res.status(200).send(customer);
                console.log("fetched from mysql")
            }
        })
    }catch (err) {
        res.status(500).send({ message: err.message });
    }

}

/********************************************************************************************************************************* */


//creating product ....

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
    getAllorders,
    getOne
};