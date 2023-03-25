const express = require("express");
const cors = require ('cors');
const mongoose = require("mongoose");
const routes = require('./src/Routes/student.routes')
const adminroutes = require('./src/Routes/admin.routes')
const paymentRoutes = require('./src/Routes/payment.routes') 
const courseRoutes = require('./src/Routes/course.routes') 
const dotenv = require('dotenv')
dotenv.config()


const path  = require('path')
const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

 app.set("view engine", "ejs");

 //route for index page
 app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    next();
  });

routes.routes(app)
adminroutes.adminroutes(app)
paymentRoutes.routes(app)
courseRoutes.courseroutes(app)

mongoose.connect("mongodb://127.0.0.1:27017/studentDB",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

},(err)=>{
    if (err) throw err;
    console.log("DB connected")
})

app.listen(9002,()=>{
    console.log("Server is running at 9002")
})