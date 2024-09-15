const User = require("../user")

const findUsers=()=>{
    return User.find()
}

const findUser= (key,value)=>{
    if(key==="_id"){
        return User.findById(value)

    }
    return User.findOne({[key]:value})

}

const createUser =({name,email,password,roles,accountStatus})=>{
    let user = new User({name,email,password,roles:roles?roles:"student",activeStatus:accountStatus?accountStatus:"Pending"})
    return user.save()

}

module.exports ={
    findUser,
    createUser,findUsers
}