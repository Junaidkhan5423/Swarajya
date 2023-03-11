const mongoose = require("mongoose");
//step 1)Students Schema ===> step 2)model
const studentSchema = new mongoose.Schema({
    profile: {
        type: String
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userName: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    dob: {
        type: String,
    },
    nationality: {
        type: String,
    },
    fatherOccupation: {
        type: String,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    centerName: {
        type: String,
        
    }, courseName: {
        type: String,
    },
    courseCode: {
        type: String,
    }
})

module.exports = mongoose.model("admissions", studentSchema);
