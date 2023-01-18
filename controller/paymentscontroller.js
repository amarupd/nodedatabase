const db = require("../model");


//create our main model vvv

const Payment = db.payments

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
        client.get(id, async (err, payment) => {
            if (err) throw err;
            if (payment) {
                console.log("catched from redis");
                res.status(200).send({
                    payment: JSON.parse(payment),
                    message: " payment retrieved from the cache"
                });
            }
            else {
                let payment = await Payment.findOne({ where: { customerNumber: id } })
                client.setex(id,600,JSON.stringify(payment));
                res.status(200).send(payment);
                console.log("fetched from mysql")
            }
        })
    }catch (err) {
        res.status(500).send({ message: err.message });
    }

}

/********************************************************************************************************************************* */


//creating product

const addPayment = async (req, res) => {
    let info = {
        customerNumber: req.body.customerNumber,
        checkNumber: req.body.checkNumber,
        paymentDate: req.body.paymentDate,
        amount: req.body.amount
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
    getAllpayments,
    getOne
};