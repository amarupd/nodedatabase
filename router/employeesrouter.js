const employeesController = require("../controller/employeescontroller")

const emprouter = require("express").Router();

emprouter.post('/addEmployee', employeesController.addEmployee);

emprouter.get('/allEmployee', employeesController.getAllEmployees);

emprouter.get('/gete',employeesController.getOne);

module.exports = emprouter;
