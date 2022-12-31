const db=require("../model");


//create our main model...

const Office = db.offices



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
    getAllOffices
};