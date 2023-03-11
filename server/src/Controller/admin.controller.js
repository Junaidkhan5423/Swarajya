const adminModel = require("../Model/admin.model")
const jwt = require('jsonwebtoken')


const adminSignUp = async (req, res) => {

    try {

        const {  email,password,name } = req.body
        // const Mapemail =[]
        const existingEmail = new Promise ((resolve, reject)=>{
            adminModel.findOne({email}, function (err, email) {
                if(err) reject(new Error(err)) 
                if(email) reject ({error : "this email is already register"})

                resolve()
            })

        })
      
        
        Promise.all([existingEmail])
        .then(()=>{
        // console.log(Mapemail);
        const newAdmin =  new adminModel({
            name:name,
            email: email,
            password:password,
        })

        newAdmin.save()
                    .then((result) => {
                        res.status(200).send({ message: "admin succefully" })
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
const adminLogin =async (req, res)=>{
    console.log(req.body);
const {email , password}= req.body;
try {
    adminModel.findOne({email}).then((user)=>{
        console.log(user);
            if(user?.password === password){
           const token = jwt.sign({
                    userId : user?._id,
                    userEmail: user?.email
                },'secret',{ expiresIn:"24H"})

                return res.status(201).send({
                    message:"login succefully",
                    name:user?.name,
                    token:token
                })
            }else{
                res.status(500).send({ message: "wrong password" })
            }
    }).catch((error)=>{
        res.status(500).send({ message: error })

    })
    
} catch (error) {
    
}

}

module.exports = {adminSignUp ,adminLogin}
