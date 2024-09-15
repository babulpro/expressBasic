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
    },
    roles:{
        type:String,
        default:["student"]
    },
    accountStatus:{
        type:String,
        enum:['Active','Pending'],
        default:'Pending'
    }
})

let User = mongoose.model("user",userShema)
module.exports = User
