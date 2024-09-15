 
 
const { registerAuth, logInAuth } = require("../service/auth") 
const registerController =async(req,res,next)=>{
    let{name,email,password,roles,activeStatus} =req.body
    if(!name || !email || !password){
       return res.status(400).json({msg:"invalid credential"})
    }
   
    try{
       const newUser = await registerAuth(name,email,password,roles,activeStatus)
       return res.status(201).json({msg:"created successfully ",newUser})
 
    }
    catch(e){
        next(e)
    }

}

const loginController =async(req,res,next)=>{
    let {email,password}=req.body
    
    if(!email || !password){
        return res.status(401).json({msg:"invalid credential"})
    }

   try{
    let Token = await logInAuth(email,password)
    
    res.cookie('token',Token,{
        httpOnly:true,sameSite:"strict",maxAge:3600000
    })
    res.status(201).json({Token})
     

   }
   catch(e){
    next(e)
   }
    
}
 

module.exports={
    registerController,
    loginController, 
}