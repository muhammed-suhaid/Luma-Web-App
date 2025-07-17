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

// *************** Register *************** //
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

// *************** Login *************** //
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

// *************** Update Profile *************** //
app.put("/update-profile", (request, response) => {
    response.json(
        {
            "status": "Profile Updated Successfully"
        }
    )
})

// *************** Get Profile *************** //
app.post("/view-profile", (request, response) => {
    response.json(
        {
            "status": "Profile Viewed Successfully"
        }
    )
})

// *************** View All Profile *************** //
app.post("/users", (request, response) => {
    response.json(
        {
            "status": "Successfully Fetched All Users"
        }
    )
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})