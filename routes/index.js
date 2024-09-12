const route = require("express").Router()
const router = require("./routes")



route.use("/api/v1",router)


module.exports = route