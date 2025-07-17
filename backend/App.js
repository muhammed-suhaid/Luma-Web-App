const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/user_model")
const bcrypt = require("bcryptjs")
const { mongoUrl } = require("./config")
const profileModel = require("./models/profile_model")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(mongoUrl)

// ******************** Register ******************** //
app.post("/register", async (request, response) => {
    // Getting data from user
    const getFirstName = request.body.firstName
    const getLastName = request.body.lastName
    const getEmail = request.body.emailAddress
    const getPassword = request.body.password

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
            firstName: getFirstName,
            lastName: getLastName,
            emailAddress: getEmail,
            password: hashedPassword,
        }
    )
    const savedUser = await data_store.save()

    // Passing response 
    response.json(
        {
            status: "Successfully Registered",
            result: {
                userId: savedUser._id,
                firstName: getFirstName,
                lastName: getLastName,
                emailAddress: getEmail,
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

// ******************** Complete Profile ******************** //
app.post("/complete-profile", async (request, response) => {
    // Getting data from user
    const getUserId = request.body.userId;
    const getAge = request.body.age;
    const getGender = request.body.gender;
    const getPhoto = request.body.photo;
    const getLocation = request.body.location;
    const getPhone = request.body.phone;
    const getinstagramLink = request.body.instagramLink;
    const getBio = request.body.bio;
    const getInterests = request.body.interests;
    const getInterestedIn = request.body.interestedIn;
    const getHeight = request.body.height;
    const getWeight = request.body.weight;
    const getRelationshipStatus = request.body.relationshipStatus;
    const getLookingFor = request.body.lookingFor;
    const getEducation = request.body.education;
    const getProfession = request.body.profession;
    const getLanguages = request.body.languages;
    const getHobbies = request.body.hobbies;

    try {
        // Check if a profile already exists for this user
        const existingProfile = await profileModel.findOne({ userId: getUserId });
        if (existingProfile) {
            return response.status(400).json({
                status: "Failed",
                message: "Profile already exists for this user",
            });
        }

        // Save to database
        const data_store = new profileModel({
            userId: getUserId,
            age: getAge,
            gender: getGender,
            photo: getPhoto,
            location: getLocation,
            phone: getPhone,
            instagramLink: getinstagramLink,
            bio: getBio,
            interests: getInterests,
            interestedIn: getInterestedIn,
            height: getHeight,
            weight: getWeight,
            relationshipStatus: getRelationshipStatus,
            lookingFor: getLookingFor,
            education: getEducation,
            profession: getProfession,
            languages: getLanguages,
            hobbies: getHobbies,
        });

        const savedProfile = await data_store.save();

        // Return response
        response.json({
            status: "Profile Created Successfully",
            result: savedProfile,
        });
    } catch (error) {
        response.status(500).json({
            status: "Error",
            message: "Something went wrong",
            error: error.message,
        });
    }
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
app.post("/view-profile", (request, response) => {
    response.json(
        {
            "status": "Profile Viewed Successfully"
        }
    )
})

// ******************** View All Profile ******************** //
app.post("/users", (request, response) => {
    response.json(
        {
            "status": "Successfully Fetched All Users"
        }
    )
})

// ******************** View All Profile Excluding Logged in Profile ******************** //
app.post("/users/exclude", async (request, response) => {
    try {
        // Getting data from user
        const currentUserId = request.body.userId;

        // Get current user profile
        const currentUserProfile = await profileModel.findOne({ userId: currentUserId });
        if (!currentUserProfile) {
            return response.status(404).json({ message: "Profile not found" });
        }

        const targetGender = currentUserProfile.interestedIn;

        // Build gender filter
        const genderFilter = targetGender === "Everyone"
            ? {} // no gender filter, include all
            : { gender: targetGender };

        // Find matching profiles excluding the current user's profile
        const matchingProfiles = await profileModel.find({
            userId: { $ne: currentUserId },
            ...genderFilter
        }).populate("userId", "firstName lastName emailAddress");

        // Returning Response
        const result = matchingProfiles.map(profile => {
            const profileObj = profile.toObject();
            return {
                userId: profileObj.userId._id,
                _id: profileObj._id,
                firstName: profileObj.userId.firstName,
                lastName: profileObj.userId.lastName,
                emailAddress: profileObj.userId.emailAddress,
                age: profileObj.age,
                gender: profileObj.gender,
                photo: profileObj.photo,
                location: profileObj.location,
                phone: profileObj.phone,
                instagramLink: profileObj.instagramLink,
                bio: profileObj.bio,
                interests: profileObj.interests,
                interestedIn: profileObj.interestedIn,
                height: profileObj.height,
                weight: profileObj.weight,
                relationshipStatus: profileObj.relationshipStatus,
                lookingFor: profileObj.lookingFor,
                education: profileObj.education,
                profession: profileObj.profession,
                languages: profileObj.languages,
                hobbies: profileObj.hobbies,
                createdAt: profileObj.createdAt,
                updatedAt: profileObj.updatedAt,
            };
        });

        // Send response
        response.json({
            status: "Successfully Fetched All Users",
            count: result.length,
            data: result,
        });
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error.message,
        });
    }
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})