const db=require("../model");


//create our main model

const ProdLines = db.productlines
console.log("we are here");


//creating product

const addProductline= async (req, res) => {
    let info = {
        productLine: req.body.productLine,
        textDescription: req.body.orderDate,
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
    getAllProductliness
};