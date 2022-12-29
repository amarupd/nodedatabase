const productlines = require("../controller/productlinescontroller")

const plrouter = require("express").Router();

plrouter.post('/addProductline', productlines.addProductline);

plrouter.get('/getAllproductlines', productlines.getAllProductliness);

module.exports = plrouter;
