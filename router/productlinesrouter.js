const productlines = require("../controller/productlinescontroller")

const payrouter = require("express").Router();

payrouter.post('/addProductline', productlines.addProductline);

payrouter.get('/getAllproductlines', productlines.getAllProductliness);

module.exports = payrouter;