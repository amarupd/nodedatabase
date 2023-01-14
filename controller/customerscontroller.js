const db = require("../model");
const redis = require("redis");

const redisPort = "redis://127.0.0.1:6379"
// const redisPort = "redis://default:ovDFb4qIVC7PoaIdIDlsaE4ymM97Aaf3@redis-12561.c264.ap-south-1-1.ec2.cloud.redislabs.com:12561"
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})


//create our main model...

const Customer = db.customers
console.log("we are here");


//creating product...

const addCustomer = async (req, res) => {
    let info = {
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit
    }

    const customer = await Customer.create(info)
    res.status(200).send(customer)
}

//get all products

const getAllCustomer = async (req, res) => {
    console.log("we are in getAllCustomer");
    let customers = await Customer.findAll({});
    res.status(200).send(customers)
    console.log("fetched all the result");
}


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
                let customer = await Customer.findOne({ where: { customerNumber: id } })
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

module.exports = {
    addCustomer,
    getAllCustomer,
    getOne
};