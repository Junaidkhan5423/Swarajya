const service = require('../Controller/admin.controller')
const authSevice = require('../auth')
// Routes
 function adminroutes(app){
   
    app.post("/adminsignup",service.adminSignUp)
    app.post("/adminlogin",service.adminLogin)

}

module.exports={adminroutes}