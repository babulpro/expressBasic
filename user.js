const {mongoose ,Schema}= require("mongoose")

let userShema = new Schema({
    name:{
        type:String,
        minlength:10,
        required:true
    },
    email:{
        type:String,
        minlength:10,
        required:true
    },
    password:{
        type:String, 
        required:true
    }
})

let User = mongoose.model("user",userShema)
module.exports = User
