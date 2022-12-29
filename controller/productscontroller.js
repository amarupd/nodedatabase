const db=require("../model");


//create our main model

const Product = db.products
console.log("we are here");


//creating product

const addProduct= async (req, res) => {
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
    getAllProducts
};