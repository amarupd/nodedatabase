const productlines = require("../controller/productlinescontroller")

const plrouter = require("express").Router();

plrouter.post('/addProductline', productlines.addProductline);

plrouter.get('/getAllproductlines', productlines.getAllProductliness);

plrouter.get('/getpl',productlines.getOne);


module.exports = plrouter;
