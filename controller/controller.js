 
const User = require("../user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { registerAuth, logInAuth } = require("../service/auth")
const error = require("../utils/error")
 
 


const registerController =async(req,res,next)=>{
    let{name,email,password} =req.body
    if(!name || !email || !password){
       return res.status(400).json({msg:"invalid credential"})
    }
   
    try{
       const newUser = await registerAuth(name,email,password)
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

const privateController = async(req,res)=>{
 
    console.log(req.user)
    res.status(200).json({msg:"i am private route"})
}

const getController = (req,res)=>{
    res.write("your app is running")

    res.end()
}

module.exports={
    registerController,
    loginController,
    privateController,
    getController
}