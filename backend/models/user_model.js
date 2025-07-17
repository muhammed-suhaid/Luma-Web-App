const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    emailAddress: String,
    password: String,
    age: Number,
    gender: String,
    photo: String,
    location: String,
    phone: String,
    instagramLink: String,
    bio: String,
    interests: String,
    interestedIn: String,
    relationshipStatus: String,
    lookingFor: String,
    education: String,
    profession: String,
    languages: [],
    hobbies: [],
},
    { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema)
module.exports = userModel
