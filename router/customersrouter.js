const customerController = require("../controller/customerscontroller")

const employeesController = require("../controller/employeescontroller")

const officesController = require("../controller/officescontroller")

const router = require("express").Router();

router.post('/addCustomer', customerController.addCustomer);

router.get('/allCustomer', customerController.getAllCustomer);

//ROUTE FOR EMPLOYEE TABLE

router.post('/addEmployee', employeesController.addEmployee);

router.get('/allEmployee', employeesController.getAllEmployees);

//ROUTE FOR OFFICES TABLE

router.post('/addoffices', officesController.addOffice);

router.get('/alloffices', officesController.getAllOffices);

module.exports = router;