const { registerController, loginController } = require('../controller/controller')
const { getUsers, getUserById, updateUserById, deleteUserById, updateUserByIdSlide } = require('../controller/user')
const authorization = require("../middleware/authorization")

const router = require('express').Router() 
router.post("/register",registerController) 
router.post("/login",loginController) 
router.get("/",authorization,getUsers)
router.get("/:userId",authorization,getUserById)
router.put("/:userId",authorization,updateUserById)
router.delete("/:userId",deleteUserById)
router.patch("/:userId",updateUserByIdSlide)



module.exports= router
