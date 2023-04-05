const couserModel = require("../Model/course.model")
const jwt = require('jsonwebtoken')


const createCourse = async (req, res) => {

    try {

        const {  name,fullName,specialition ,duration, fees,type } = req.body
        console.log(name);
        // const Mapemail =[]
        const existingCourseName = new Promise ((resolve, reject)=>{
            couserModel.findOne({name}, function (err, name) {
                if(err) reject(new Error(err)) 
                if(name) reject ({error : "this course is already exist"})

                resolve()
            })

        })
      
        
        Promise.all([existingCourseName])
        .then(()=>{
        // console.log(Mapemail);
        const newAdmin =  new couserModel({
            name:name,
            fullName: fullName,
            specialition:specialition,
            duration:duration,
            fees:fees,
            type:type
        })

        newAdmin.save()
                    .then((result) => {
                        res.status(200).send({ message: "New Course Succefully Added" })
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
    catch (error){
        res.status(500).send({ message: error })

    }

}
const getAllCourses = async(req ,res)=>{

     const allCourse= await   couserModel.find()
            res.status(200).send({
                status: true,
                message: "success",
                data: allCourse
        })
    
    }
    const getByCategoryCourses = async(req ,res)=>{
        

        const allCourse= await   couserModel.find({type:req.query.type})
        console.log(allCourse);
               res.status(200).send({
                   status: true,
                   message: "success",
                   data: allCourse
           })
       
       }
   



module.exports = {createCourse ,getAllCourses ,getByCategoryCourses}
