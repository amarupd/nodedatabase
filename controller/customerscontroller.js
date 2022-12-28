const db=require("../model");


//create our main model

const Customer = db.customers
console.log("we are here");


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

const getAllCustomer = async (req, res) => {
    console.log("we are in getAllCustomer");
    let customers = await Customer.findAll({});
    res.status(200).send(customers)
    console.log("fetched all the result");
}


module.exports = {
    addCustomer,
    getAllCustomer
};