const customerController = require("../controller/customerscontroller")

// const axios = require("axios");

// const redis = require("redis");

const router = require("express").Router();

// const redisPort = "redis://127.0.0.1:6379"

// const client = redis.createClient(redisPort);
// client.on("error", (err) => {
//     console.log(err);
// })

router.post('/addCustomer', customerController.addCustomer);

router.get('/allCustomer', customerController.getAllCustomer);

router.get('/get',customerController.getOne);





module.exports = router;
