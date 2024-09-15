const route = require("express").Router() 
const router = require("./routes")
 



route.use("/api/v1",router)
// route.use("api/v1/users",userRoutes)


module.exports = route