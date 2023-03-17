const mongoose = require("mongoose");
//step 1)Students Schema ===> step 2)model
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    role:{
        type:String,
    },  cities:{
        type:Array,
    }
})

module.exports = mongoose.model("admin", AdminSchema);
