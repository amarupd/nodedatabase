const db = require("../model");


//create our main model

const Product = db.products

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
        client.get(id, async (err, product) => {
            if (err) throw err;
            if (product) {
                console.log("catched from redis");
                res.status(200).send({
                    product: JSON.parse(product),
                    message: " product retrieved from the cache"
                });
            }
            else {
                let product = await Product.findOne({ where: { productCode: id } })
                client.setex(id,600,JSON.stringify(product));
                res.status(200).send(product);
                console.log("fetched from mysql")
            }
        })
    }catch (err) {
        res.status(500).send({ message: err.message });
    }

}

/********************************************************************************************************************************* */


//creating product ffffff

const addProduct = async (req, res) => {
    let info = {
        productCode: req.body.productCode,
        productName: req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productVendor,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

//get all products

const getAllProducts = async (req, res) => {
    console.log("we are in getAllproductss");
    let products = await Product.findAll({})
    res.status(200).send(products)
    console.log("fetched all the products");
}


module.exports = {
    addProduct,
    getAllProducts,
    getOne
};