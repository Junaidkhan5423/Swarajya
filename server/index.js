const express = require("express");
const cors = require ('cors');
const mongoose = require("mongoose");
const routes = require('./Routes/student.routes')
const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())


routes.routes(app)

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