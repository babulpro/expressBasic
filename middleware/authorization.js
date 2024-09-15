const jwt = require("jsonwebtoken")
const User = require("../user")

async function authorizedMiddleware(req,res,next){
    let token = req.cookies.token;
 
    if(!token){
        return res.status(401).json({msg:"token is not found"})
    }
     try{
        let decoded = await jwt.verify(token,"XYZ-123")
        const user = await User.findById(decoded._id)
        if(!user){
            return res.status(401).json({msg:"unauthorized"})
        }
         
         
        req.user = user
        next()

     }
     catch(e){
        console.log(e)

     }

}


module.exports = authorizedMiddleware