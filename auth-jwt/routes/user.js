const express = require("express")
const router = express.Router()
const controller =require("../controller/user")
const verify = require("../middleware/authVerify")


router.get("/",verify,controller.get)

module.exports = router