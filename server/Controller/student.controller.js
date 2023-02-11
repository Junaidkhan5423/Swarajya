const studentModel = require("../Model/student.model")
const studentAdmission = async (req, res) => {

    try {

        const { userName ,firstName, lastName, fatherName, dob, nationality, address, fatherOccupation, state, city, email, phoneNo, centerName, courseName, courseCode } = req.body
        // const Mapemail =[]
        const existingEmail = new Promise ((resolve, reject)=>{
            studentModel.findOne({email}, function (err, email) {
                if(err) reject(new Error(err)) 
                if(email) reject ({error : "this email is already register"})

                resolve()
            })

        })
        const existingUser = new Promise((resolve , reject)=>{
            studentModel.findOne({userName},function (err, user) {
                if(err) reject(new Error(err)) 
                if(user) reject ({error : "this userName is already register"})


                resolve()
                
            })

        })
        
        Promise.all([existingEmail,existingUser])
        .then(()=>{
        // console.log(Mapemail);
        const student =  new studentModel({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            fatherName: fatherName,
            dob: dob,
            nationality: nationality,
            address: address,
            fatherOccupation: fatherOccupation,
            state: state,
            city: city,
            email: email,
            phoneNo: phoneNo,
            centerName: centerName,
            courseName: courseName,
            courseCode: courseCode
        })

                student.save()
                    .then((result) => {
                        res.status(200).send({ message: "student added succefully" })
                    }).catch((err) => {
                        res.status(500).send({ message: err })
                        console.log(err);
                    })
        }).catch((err)=>{
             res.status(500).send({ message: err })
                        console.log(err);

        })



            // res.status(err)



        // console.log("app running successfully");

    }
    catch {

    }

}
const admissionlist = async (req, res) => {
    studentModel.find((err, users) => {
        if (err) throw err;
        res.status(200).send({
            status: true,
            message: "success",
            data: users

        })


    }, [])

}


module.exports = { studentAdmission, admissionlist }