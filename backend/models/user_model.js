const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "emailAddress": String,
        "password": String,
    }
)

const userModel = mongoose.model("Users", userSchema)
module.exports = userModel
