const service = require('../Controller/course.controller')
const authSevice = require('../auth')
// Routes
 function courseroutes(app){
   
    app.post("/addCourse",service.createCourse)
    app.get("/getAllCourse",service.getAllCourses)

}

module.exports={courseroutes}