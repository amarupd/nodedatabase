const db = require("../model");


//create our main model

const ProdLines = db.productlines

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
        client.get(id, async (err, productline) => {
            if (err) throw err;
            if (productline) {
                console.log("catched from redis");
                res.status(200).send({
                    productline: JSON.parse(productline),
                    message: " productline retrieved from the cache"
                });
            }
            else {
                let productline = await ProdLines.findOne({ where: { productlineNumber: id } })
                client.setex(id,600,JSON.stringify(productline));
                res.status(200).send(productline);
                console.log("fetched from mysql")
            }
        })
    }catch (err) {
        res.status(500).send({ message: err.message });
    }

}

/********************************************************************************************************************************* */


//creating product gfgfgf

const addProductline = async (req, res) => {
    let info = {
        productLine: req.body.productLine,
        textDescription: req.body.textDescription,
        htmlDescription: req.body.htmlDescription,
        image: req.body.image
    }

    const productline = await ProdLines.create(info)
    res.status(200).send(productline)
}

//get all products

const getAllProductliness = async (req, res) => {
    console.log("we are in getAllorders");
    let productliness = await ProdLines.findAll({})
    res.status(200).send(productliness)
    console.log("fetched all the productliness");
}


module.exports = {
    addProductline,
    getAllProductliness,
    getOne
};