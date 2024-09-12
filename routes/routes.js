const { registerController, loginController, privateController, getController } = require('../controller/controller')
const authorization = require("../middleware/authorization")

const router = require('express').Router()


router.post("/register",registerController)



router.post("/login",loginController)

router.get("/private",authorization,
    privateController
)
router.get("/",getController)

module.exports= router
