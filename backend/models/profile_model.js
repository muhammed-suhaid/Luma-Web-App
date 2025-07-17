const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        age: Number,
        gender: String,
        photo: String,
        location: String,
        phone: String,
        instagramLink: String,
        bio: String,
        interests: [String],
        interestedIn: String,
        height: Number,
        weight: Number,
        relationshipStatus: String,
        lookingFor: String,
        education: String,
        profession: String,
        languages: [String],
        hobbies: [String]
    },
    { timestamps: true }
);

const profileModel = mongoose.model("Profiles", profileSchema);
module.exports = profileModel;
