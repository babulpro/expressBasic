const express = require("express")
const connectBd = require("../db")
 
 
const cookieParser = require("cookie-parser")
 
 
const route = require('../routes/index')





const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(route)

app.use((err,req,res,next)=>{
    const msg = err.msg ?err.msg :"server error occured";
    const status= err.status ?err.status:500;
     
        res.status(status).json({msg})
    
})



 




connectBd("mongodb://localhost:27017/babul", { serverSelectionTimeoutMS: 1000 }).then(()=>{
    console.log("mongodb is connected to the server")
    app.listen((3000),()=>{
        console.log("app is running on port no 3000")
    })

}).catch((e)=>{
    console.log(e)
})
 