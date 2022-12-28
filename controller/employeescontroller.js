const db=require("../model");


//create our main model

const Employee = db.employees



//creating product

const addEmployee = async (req, res) => {
    let info = {
        employeeNumber: req.body.employeeNumber,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        extension: req.body.extension,
        email: req.body.email,
        officeCode: req.body.officeCode,
        reportsTo: req.body.reportsTo,
        jobTitle: req.body.jobTitle
    }

    const employee = await Employee.create(info)
    res.status(200).send(employee)
}

//get all products

const getAllEmployee = async (req, res) => {
    console.log("we are in getAllemployee");
    let employees = await Employee.findAll({});
    res.status(200).send(employees)
    console.log("fetched all the result");
}


module.exports = {
    addEmployee,
    getAllEmployee
};