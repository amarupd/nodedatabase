const employeesController = require("../controller/employeescontroller")

const emprouter = require("express").Router();

emprouter.post('/addEmployee', employeesController.addEmployee);

emprouter.get('/allEmployee', employeesController.getAllEmployees);

module.exports = emprouter;
