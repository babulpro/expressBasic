const mongoose = require("mongoose")


function connectDB(str){

    return mongoose.connect(str)

}


module.exports = connectDB;