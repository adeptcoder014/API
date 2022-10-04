const express =require('express')
const cors = require('cors')
const app = express()
require("dotenv").config()
require("./db")


app.use(cors())
app.use(express.json())
// app.use("/",require("./routes/index"))

app.use("/user"    , require("./routes/user"))
app.use("/register", require('./routes/register'))
app.use("/login"   , require("./routes/login"))

app.listen(process.env.PORT, ()=>(console.log(`Sever started on PORT :${process.env.PORT}`)))