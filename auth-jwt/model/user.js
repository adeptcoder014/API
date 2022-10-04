const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        max:150
    },
    lastName:{
        type:String,
        required:true,
        max:150
    },
    email:{
        type:String,
        required:true,
        max:150
    },
    password:{
        type:String,
        required:true,
        max:150
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const userModel= mongoose.model("user",userSchema)

module.exports =userModel