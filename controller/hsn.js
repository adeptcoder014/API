const hsnModel = require("../models/hsn")


module.exports = {
    get: async (req, res) => {
        const hsnData = await hsnModel.find({})
        res.status(200).json({
            status: "Got",
            
                hsnData
            
        })
    },

    post:
        async (req, res) => {
            const hsn = new hsnModel(req.body)
            let hsnData = await hsn.save()
            res.status(201).json({
                status: "Post",
                hsnData
            })
        }

}