const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//! another way to use this schema is :
//  module.exports = mongoose.model("User",userSchema)

mongoose.model("User", userSchema)
