const express= require('express')
const router = express.Router()

// router.use("/user"    , require("../routes/user"))
router.use("/register", require('../routes/register'))
router.use("/login"   , require("../routes/login"))

module.exports = router