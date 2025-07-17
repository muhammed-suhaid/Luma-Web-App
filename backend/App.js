const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// *************** Register *************** //
app.post("/register", (request, response) => {
    response.json(
        {
            "status": "Successfully Registered"
        }
    )
})

// *************** Login *************** //
app.post("/login", (request, response) => {
    response.json(
        {
            "status": "Successfully Logined"
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