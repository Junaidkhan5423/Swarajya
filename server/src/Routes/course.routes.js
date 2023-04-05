const service = require('../Controller/course.controller')
const authSevice = require('../auth')
// Routes
 function courseroutes(app){
   
    app.post("/addCourse",service.createCourse)
    app.get("/getAllCourse",service.getAllCourses)
    app.get("/getByCategoryCourse",service.getByCategoryCourses)

}

module.exports={courseroutes}