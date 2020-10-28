//! npm package imports
const express = require("express")
const app = express()

const morgan = require("morgan")
const mongoose = require("mongoose")

//! PORT
const PORT = 5000

//! import MONGOURI
const { MONGOURI } = require("./config.js")

//! load the userSchema
require("./models/user.js")

//! middlwares
// for parsing request body
app.use(express.json())
// for logging the request
app.use(morgan('tiny'))

//! load the routes
app.use(require("./routes/auth"))
app.use(require("./routes/post"))

//! Connect with mongoose
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MONGODB")
})

mongoose.connection.on("error", (err) => {
    console.log("Error: ", err)
})

//! routes (APIS => get,put,patch,post,delete)
app.get("/", (req, res) => {
    res.send("HELLO FKKING WORRLLD")
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
