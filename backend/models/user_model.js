const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "emailAddress": String,
        "password": String,
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("Users", userSchema)
module.exports = userModel
