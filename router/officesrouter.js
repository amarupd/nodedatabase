const officesController = require("../controller/officescontroller")

const offrouter = require("express").Router();

offrouter.post('/addoffice', officesController.addOffice);

offrouter.get('/alloffices', officesController.getAllOffices);

router.get('/get',officesController.getOne);

module.exports = offrouter;
