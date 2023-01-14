const products = require("../controller/productscontroller")

const prodrouter = require("express").Router();

prodrouter.post('/addProducts', products.addProduct);

prodrouter.get('/getAllproducts', products.getAllProducts);

prodrouter.get('/getpd',products.getOne);


module.exports = prodrouter;
