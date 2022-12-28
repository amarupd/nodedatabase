const customerController = require("../controller/customerscontroller")

const router = require("express").Router();

router.post('/addCustomer', customerController.addCustomer);

router.get('/allCustomer', customerController.getAllCustomer);

module.exports = router;