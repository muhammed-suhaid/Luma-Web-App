const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/user_model")
const bcrypt = require("bcryptjs")
const { mongoUrl } = require("./config")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(mongoUrl)

// ******************** Register ******************** //
app.post("/register", async (request, response) => {
    // Getting data from user
    const getName = request.body.name
    const getEmail = request.body.emailAddress
    const getPassword = request.body.password
    const getAge = request.body.age;
    const getGender = request.body.gender;
    const getPhoto = request.body.photo;
    const getLocation = request.body.location;
    const getPhone = request.body.phone;
    const getinstagramLink = request.body.instagramLink;
    const getBio = request.body.bio;
    const getInterests = request.body.interests;
    const getInterestedIn = request.body.interestedIn;
    const getRelationshipStatus = request.body.relationshipStatus;
    const getLookingFor = request.body.lookingFor;
    const getEducation = request.body.education;
    const getProfession = request.body.profession;
    const getLanguages = request.body.languages;
    const getHobbies = request.body.hobbies;

    //  Check if email already exists
    const existingUser = await userModel.findOne({ emailAddress: getEmail })
    if (existingUser) {
        return response.status(400).json({
            status: "Failed",
            message: "Email already registered",
        })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(getPassword, 10)

    // Storing data to mongodb
    let data_store = new userModel(
        {
            name: getName,
            emailAddress: getEmail,
            password: hashedPassword,
            age: getAge,
            gender: getGender,
            photo: getPhoto,
            location: getLocation,
            phone: getPhone,
            instagramLink: getinstagramLink,
            bio: getBio,
            interests: getInterests,
            interestedIn: getInterestedIn,
            relationshipStatus: getRelationshipStatus,
            lookingFor: getLookingFor,
            education: getEducation,
            profession: getProfession,
            languages: getLanguages,
            hobbies: getHobbies,
        }
    )
    const savedUser = await data_store.save()

    // Passing response 
    response.json(
        {
            status: "Successfully Registered",
            result: {
                userId: savedUser._id,
                name: getName,
                emailAddress: getEmail,
                age: getAge,
                gender: getGender,
                photo: getPhoto,
                location: getLocation,
                phone: getPhone,
                instagramLink: getinstagramLink,
                bio: getBio,
                interests: getInterests,
                interestedIn: getInterestedIn,
                relationshipStatus: getRelationshipStatus,
                lookingFor: getLookingFor,
                education: getEducation,
                profession: getProfession,
                languages: getLanguages,
                hobbies: getHobbies,
            }
        }
    )
})

// ******************** Login ******************** //
app.post("/login", async (request, response) => {
    // Getting data from user
    const getEmail = request.body.emailAddress
    const getpassword = request.body.password

    // Checking EmailAddress exists
    const user = await userModel.findOne({ emailAddress: getEmail })
    if (!user) {
        return response.status(400).json({
            status: "Failed",
            message: "User not found"
        })
    }
    // Checking Password is same
    const isMatch = await bcrypt.compare(getpassword, user.password);
    if (!isMatch) {
        return response.status(400).json({
            status: "Failed",
            message: "Incorrect password"
        })
    }

    // Passing response 
    response.json(
        {
            status: "Successfully Logged In",
            result: {
                userId: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
            }
        }
    )
})

// ******************** Update Profile ******************** //
app.put("/update-profile", (request, response) => {
    response.json(
        {
            "status": "Profile Updated Successfully"
        }
    )
})

// ******************** Get Profile ******************** //
app.post("/view-profile", async (request, response) => {
    const userId = request.body.userId

    const profile = await userModel.findById(userId)

    if (!profile) {
        return response.status(404).json({
            status: "error",
            message: "Profile not found"
        })
    }

    response.json(
        {
            status: "Profile Viewed Successfully",
            data: profile
        }
    )
})

// ******************** View All Profile ******************** //
app.post("/users", async (request, response) => {
    try {
        const allProfiles = await userModel.find()

        response.json({
            status: "Successfully Fetched All Users",
            count: allProfiles.length,
            data: allProfiles
        })

    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error.message
        })
    }
})

// ******************** View All Profile Excluding Logged in Profile ******************** //
app.post("/users/exclude", async (request, response) => {
    try {
        // Getting data from user
        const currentUserId = request.body.userId

        // Get current user profile
        const currentUserProfile = await userModel.findById(currentUserId)
        if (!currentUserProfile) {
            return response.status(404).json({ message: "Profile not found" })
        }

        const targetGender = currentUserProfile.interestedIn;

        // Build gender filter
        const genderFilter = targetGender === "Everyone"
            ? {} // no gender filter, include all
            : { gender: targetGender }

        // Find matching profiles excluding the current user's profile
        const matchingProfiles = await userModel.find({
            _id: { $ne: currentUserId },
            ...genderFilter,
        });

        // Send response
        response.json({
            status: "Successfully Fetched All Users Excluding current user",
            count: matchingProfiles.length,
            data: matchingProfiles,
        })
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error.message,
        })
    }
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})