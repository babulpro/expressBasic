const User = require("../user")

const findUser= (key,value)=>{
    if(key==="_id"){
        return User.findById(value)

    }
    return User.findOne({[key]:value})

}

const createUser =({name,email,password})=>{
    let user = new User({name,email,password})
    console.log(name)
    return user.save()

}

module.exports ={
    findUser,
    createUser
}