const products = require("../controller/productscontroller")

const prodrouter = require("express").Router();

prodrouter.post('/addProducts', products.addProduct);

prodrouter.get('/getAllproducts', products.getAllProducts);

router.get('/get',products.getOne);


module.exports = prodrouter;
