const customerController = require("../controller/customerscontroller")

const employeesController = require("../controller/employeescontroller")

const router = require("express").Router();

router.post('/addCustomer', customerController.addCustomer);

router.get('/allCustomer', customerController.getAllCustomer);

router.post('/addEmployee', employeesController.addEmployee);

router.get('/allEmployee', employeesController.getAllEmployees);

module.exports = router;