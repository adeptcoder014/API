const bcrypt = require("bcrypt");
const joi = require("@hapi/joi");
const userModel = require("../model/user")

const registerSchema = joi.object({
    firstName: joi.string().min(3).required(),
    lastName: joi.string().min(3).required(),
    email: joi.string().min(3).required(),
    password: joi.string().min(3).required(),
})

module.exports = {
    post: async (req, res) => {

        try {

            const emailExists = await userModel.findOne({ email: req.body.email })
            if (emailExists) {
                res.status(400).send("Email already exists")
                return
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log("--->")

            const postUserData = new userModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
            })

            const { error } = await registerSchema.validateAsync(req.body);
            if (error) {
                res.status(400).send(error.details[0].message)
                return
            } else {

                let data = await postUserData.save();
                res.status(201).json({
                    status: "Posted",
                    data
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }



        // const postUserData = new userModel(req.body)
        // let data = await postUserData.save()
        // res.status(201).json({
        //     status: "Posted",
        //     data
        // })
    }

}