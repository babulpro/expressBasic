const { findUsers, findUser} = require("../service/user")
const User = require("../user")
const { registerController } = require("./controller")

const updateUserById = async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const updateData = req.body;   
      let user = await findUser({ _id: userId });
  
      if (!user) { 
        user = await registerController();
        return res.status(201).json({ message: 'User created', user });
      } 
      user = await User.findByIdAndUpdate(userId, updateData, { new: true });  
      return res.json({ message: 'User updated', user });
    } catch (error) { 
      next(error);
    }
  };
const getUsers=async(req,res,next)=>{
     try{
        const users = await findUsers()
        return res.status(201).json(users)

     }
     catch(e){
        next(e)
     }
}
const getUserById=async(req,res,next)=>{
    const value =req.params.userId
    let user = await findUser("_id",value)
    return res.json({name:user.name,email:user.email})
  

}
const updateUserByIdSlide=async(req,res,next)=>{
    try{
    const userId = req.params.userId
    const {name,email,roles,accountStatus}= req.body
     
   
    let user = await findUser("_id",userId)
    if(!user){
      return res.status(401).json({msg:"inValid credential"})
    }
    
    // const newUserCredential={
    //   _id:user._id,
    //   name:name || user.name,
    //   email:email || user.email,
    //   roles:roles ||user.roles,
    //   accountStatus:accountStatus || user.accountStatus
    // }
    // user = await User.findByIdAndUpdate(userId, newUserCredential, { new: true });
    user.name= name ?? user.name;
    user.roles= roles ?? user.roles;
    await user.save()
    return res.status(201).json({user})
    }
    catch(e){

    }
  

}


const deleteUserById=async(req,res,next)=>{
   try{
    const value =req.params.userId
     
    const user = await findUser("_id",value)
    if(!user){
      return res.status(400).json({msg:"invalid credential"})
    }
    await User.deleteOne({_id:value})
    return res.status(201).json({msg:"user deleted successfully"})

   }
   catch(e){
    next(e)
   }
  

}


const postUser=(req,res,next)=>{}
const putUserById=(req,res,next)=>{}
const patchUserById=(req,res,next)=>{}
 
module.exports ={
    getUsers,getUserById,postUser,putUserById,patchUserById,deleteUserById,updateUserById,updateUserByIdSlide
}