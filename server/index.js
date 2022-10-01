const express = require("express")
const cors = require('cors')
const app = express()
require("./database")
const hsn = require("./routes/hsn")

app.use(cors())
app.use(express.json())
app.use("/lauda", hsn)

app.listen(3001, ()=>{console.log("server is running")})
// module.exports = app;
