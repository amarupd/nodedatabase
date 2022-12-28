const express = require("express");
const cors = require("cors");

const port=process.env.PORT || 8000;

const app = express();

var corOptions = {
    origin: 'https://localhost:8001'
};


//middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//routes

const router=require("./router/customersrouter");
app.use('/api',router);



app.get("", (req, res) => {
    res.json({ message: 'hello from api' });
});

//port

app.listen(port,()=>{
    console.log(`listening to port number : ${port}`);
});