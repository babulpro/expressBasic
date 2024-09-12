// auth.js (service)

const User = require("../user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUser, createUser } = require("./user");
const error = require("../utils/error")

const registerAuth = async (name, email, password) => {
    const user = await findUser("email",email)

    if(user){
       throw Error("something went wrong",500)
   }
   let salt = await bcrypt.genSalt(10)
   let hash = await bcrypt.hash(password,salt)
       
   let newUser = await createUser({name,email,password:hash})
  
 
     
};

const logInAuth = async(email,password)=>{
     
    let user = await findUser("email",email)
    if(!user){
        throw  Error("something went wrong",500)
    } 
    

    let isMatch = await bcrypt.compare(password,user.password)
    
    if(!isMatch){
        throw new Error("something went wrong")

    }

    // delete user._doc.password
    let payload={
        _id:user._id,
        name:user.name,
        email:user.email
    }
     
    let Token = await jwt.sign(payload,"XYZ-123",{expiresIn:"2h"})
    console.log(Token,user.name)
    return Token


}
module.exports = {
    registerAuth,
    logInAuth
};
