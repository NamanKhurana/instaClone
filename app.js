const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan('tiny'))

const PORT = 5000

app.get("/home",(req,res) => {
    res.send("HELLO WORLD :/")
})

app.listen(PORT,() => {
    console.log("Server is running on PORT 5000")
})

