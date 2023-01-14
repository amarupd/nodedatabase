const db=require("../model");


//create our main model

const Employee = db.employees

const redis = require("redis");

const redisPort = "redis://127.0.0.1:6379"
// const redisPort = "redis://default:ovDFb4qIVC7PoaIdIDlsaE4ymM97Aaf3@redis-12561.c264.ap-south-1-1.ec2.cloud.redislabs.com:12561"
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})


//creating product...

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

const getAllEmployees = async (req, res) => {
    console.log("we are in getAllemployee");
    let employees = await Employee.findAll({})
    res.status(200).send(employees)
    console.log("fetched all the employee");
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
                let customer = await Employee.findOne({ where: { employeeNumber: id } })
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
    addEmployee,
    getAllEmployees,
    getOne
};