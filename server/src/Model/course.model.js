const mongoose = require("mongoose");
//step 1)Students Schema ===> step 2)model
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    fullName: {
        type: String,
    },
    specialition: {
        type: String,
    },
    duration: {
        type: String,
    },
    fees:{
        type:String,
    }, 
     type:{
        type:String,
    }
})

module.exports = mongoose.model("course", courseSchema);
