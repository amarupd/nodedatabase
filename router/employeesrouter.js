const employeesController = require("../controller/employeescontroller")

const router = require("express").Router();

router.post('/addEmployee', employeesController.addEmployee);

router.get('/allEmployee', employeesController.getAllEmployee);

module.exports = router;