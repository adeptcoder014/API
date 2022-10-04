const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const userModel = require("../model/user")


const loginSchema = joi.object({

    email: joi.string().min(3).required(),
    password: joi.string().min(3).required(),
})

module.exports = {
    post: async (req, res) => {

        try {
            const user = await userModel.findOne({ email: req.body.email })
            if (!user) return res.status(400).send("Incorrect email")

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            
            if (!validPassword) res.status(400).send("Incorrect Password")
            const { error } = await loginSchema.validateAsync(req.body);
            
            if (error) return res.status(400).send(error.details[0].message)
            else {
                const token = jwt.sign({ _id: user._id }, "0369");
                res.header("auth-token", token).send(token)
            }
        } catch (err) {
            res.status(500).send(err)
        }
    }

}