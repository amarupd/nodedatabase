const db=require("../model");


//create our main model...

const OrderDetail = db.orderdetails

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
                let customer = await OrderDetail.findOne({ where: { orderNumber: id } })
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

//get all products...

const getAllorderdetails = async (req, res) => {
    console.log("we are in getAllorderdetail");
    let orderdetails = await OrderDetail.findAll({})
    res.status(200).send(orderdetails)
    console.log("fetched all the orderDetails");
}


module.exports = {
    addOrderdetail,
    getAllorderdetails,
    getOne
};