
const userModel = require("../model/user")
const verify = require("../middleware/authVerify")


module.exports = {
    get: async (req,res) => {
        console.log("token", req.header("auth-token"))
        try {
            const fetchedUserData = await userModel.find({})
            res.status(200).json({
                status: "Got",
                fetchedUserData
            })
        } catch (err) {
            res.status(500).json({
                status: "Failed",
                message: err.message
            })
        }
    },
    verify
}



// const userModel = require("../model/user");
// const verify = require("../middleware/authVerify");

// const router = require("express").Router();

// router.get("/user", verify, async (req, res) => {
//   try {
//     const results = await userModel.find().exec();
//     res.send(results);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;