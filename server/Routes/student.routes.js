const service = require('../Controller/student.controller')
// Routes
 function routes(app){
    app.post("/students_login", (req, res) => {
        console.log(req.body);
        res.send("My API student login")
    })
    app.post("/admission",service.studentAdmission)
    app.get("/admissionlist",service.admissionlist)
    // app.get("/student:id",service.studentDataById)
    app.get("/student",service.studentDataByUserName)
}

module.exports={routes}