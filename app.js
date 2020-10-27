//! npm package imports
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

//! import MONGOURI
const {MONGOURI} = require("./config.js")

const app = express()

//! PORT
const PORT = 5000

//! Connect with mongoose
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",() => {
    console.log("Connected to MONGODB")
})

mongoose.connection.on("error",(err) => {
    console.log("Error: ",err)
})

//! middlwares
app.use(morgan('tiny'))

//! routes (APIS => get,put,patch,post,delete)
app.get("/",(req,res) => {
    res.send("HELLO FKKING WORRLLD")
})

app.listen(PORT,() => {
    console.log(`Server started at ${PORT}`)
})
