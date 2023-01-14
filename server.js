const express = require("express");

const cors = require("cors");

const port = process.env.PORT || 8000;

const app = express();


var corOptions = {
    origin: 'https://localhost:8001'
};


//middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//routes for customer

const router = require("./router/customersrouter");
app.use('/api', router);

//routes for employee

const emprouter = require("./router/employeesrouter");
app.use('/api', emprouter);

//routes for office

const offrouter = require("./router/officesrouter");
app.use('/api', offrouter);

//routes for orderdetails

const odrouter = require("./router/orderdetailsrouter");
app.use('/api', odrouter);

//routes for orders

const odrrouter = require("./router/ordersrouter");
app.use('/api', odrrouter);

//routes for pauments

const payrouter = require("./router/paymentsrouter");
app.use('/api', payrouter);

//routes for pauments

const plrouter = require("./router/productlinesrouter");
app.use('/api', plrouter);

//routes for pauments

const prodrouter = require("./router/productsrouter");
app.use('/api', prodrouter);

app.get("", (req, res) => {
    res.json({ message: 'hello from api' });
});

//redis import

// app.get("api/",emprouter, (req, res) => {
//     const variable = req.query.search;
//     try {
//         client.get(variable, async (err, jobs) => {
//             if (err) throw err;
    
//             if (jobs) {
//                 res.status(200).send({
//                     jobs: JSON.parse(jobs),
//                     message: "data retrieved from the cache"
//                 });
//             }
//             else {
                
//                 const jobs = await axios.get(`http://localhost:8000/api/${variable}`);
//                 client.setex(variable, 600, JSON.stringify(jobs.data));
//                 res.status(200).send({
//                     jobs: jobs.data,
//                     message: "cache miss"
//                 });
//             }
//         });
//     } catch(err) {
//         res.status(500).send({message: err.message});
//     }
// });

//port

app.listen(port, () => {
    console.log(`listening to port number : ${port}`);
});