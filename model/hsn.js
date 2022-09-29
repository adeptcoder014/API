const mongoose = require("mongoose")

const hsnSchema = new mongoose.Schema({
    code :{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    }
})


const hsnModel = mongoose.model("HSN",hsnSchema)
module.exports =hsnModel