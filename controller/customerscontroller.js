const db = require("../model");


//create our main model

const Customer = db.customers
// const Review = db.reviews


//creating product

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

const getAllProduct = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//get single products

const getSingleProduct = async (req, res) => {
    let Id = req.params.id;
    let product = await Product.findOne({ where: { id: Id } })
    res.status(200).send(product)
}

//to update

const updateProduct = async (req, res) => {
    let Id = req.params.id;
    const product = await Product.update(req.body, { where: { id: Id } })
    res.status(200).send("results updated succesfully");
}

//soft delete

const deleteProduct = async (req, res) => {
    let Id = req.params.id;
    await Product.destroy({ where: { id: Id } })
    res.status(200).send('product is deleted')
}

//publish product

const publishedProduct = async (req, res) => {
    const product = await Product.findAll({ where: { published: true } })
    res.status(200).send(product)
};

//connect one to many relating product and reviews

const getProductReviews=async(req,res)=>{
    const data=await Product.findAll({
        include:[{
            model:Review,
            as:'review'
        }],
        where:{id:1}
    })
    res.status(200).send(data)
}

//export all the controls

module.exports = {
    addProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    publishedProduct,
    getProductReviews
};