const jwt = require('jsonwebtoken')

async function auth(req , res , next) {
    try {
   const token =     req.headers.authorization              

     const decodeToken = await jwt.verify(token , "secret")
     next()
//    res.json(decodeToken)
   
    } catch (error) {
        res.status(401).json({error: "authentication error"})
        
    }
}

module.exports = {auth}
