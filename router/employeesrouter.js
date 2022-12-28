const customerController = require("../controller/customerscontroller")

const router = require("express").Router();

router.post('/addEmployee', customerController.addEmployee);

router.get('/allEmployee', customerController.getAllCustomer);

module.exports = router;