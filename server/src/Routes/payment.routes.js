const service = require('../Controller/payment.controller')
 
 function routes(app){
    app.get("/stripepayment", function (req, res) {
        res.render("payment", {
         key: process.env.PUBLISHABLE_KEY
         });
      });
    app.post("/payment",service.payment )
 
}
module.exports = {routes}