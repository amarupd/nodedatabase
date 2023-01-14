const db=require("../model");


//create our main model...

const Office = db.offices

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
                let customer = await Office.findOne({ where: { officeCode: id } })
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

//creating product

const addOffice= async (req, res) => {
    let info = {
        officeCode: req.body.officeCode,
        city: req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory
    }

    const office = await Office.create(info)
    res.status(200).send(office)
}

//get all products

const getAllOffices = async (req, res) => {
    console.log("we are in getAlloffice");
    let offices = await Office.findAll({})
    res.status(200).send(offices)
    console.log("fetched all the employee");
}


module.exports = {
    addOffice,
    getAllOffices,
    getOne
};