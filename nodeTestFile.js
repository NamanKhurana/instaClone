const express = require("express")
const morgan = require("morgan")

const app = express()

const PORT = 5000

//* A middleware is a piece of code ( or a function ) which takes the incoming request and modifies it before it reaches to actual route handler
const customMiddleware = (req,res,next) => {
    console.log("Middleware executed")
    next()
}

app.use(morgan('tiny'))

//* This would automatically call the middleware for each and every route
//! app.use(customMiddleware)

// test route
//* middleware will be executed before the callback function
app.get("/home",customMiddleware,(req,res) => {
    res.send("HELLO WORLD :/")
})

app.listen(PORT,() => {
    console.log("Server is running on PORT 5000")
})

