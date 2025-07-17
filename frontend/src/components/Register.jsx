import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate(); 
    const [input, changeInput] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        photo: "",
        location: "",
        phone: "",
        instagramLink: "",
        bio: "",
        interests: "",
        interestedIn: "",
        relationshipStatus: "",
        lookingFor: "",
        education: "",
        profession: "",
        languages: "",
        hobbies: "",
    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const onButtonClick = () => {
        axios.post("http://localhost:4000/register", input)
            .then((response) => {
                localStorage.setItem("userId", response.data._id);
                console.log("Response : ", response.data)
                navigate('/home');
            })
            .catch(() => { alert("Registration failed!") })
    }
    return (
        <div>
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4">Create Your Profile</h3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label htmlFor="" className="form-label">Email Address</label>
                                <input type="text" className="form-control" name="emailAddress" value={input.emailAddress} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" name="password" value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Profile Photo URL</label>
                                <input type="text" className="form-control" name="photo" value={input.photo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Bio</label>
                                <textarea className="form-control" name="bio" value={input.bio} onChange={inputHandler} rows="3"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label me-3">Gender</label>
                                <div>
                                    <input type="radio" name="gender" value="Male" onChange={inputHandler} checked={input.gender === 'Male'} /> Male&nbsp;&nbsp;
                                    <input type="radio" name="gender" value="Female" onChange={inputHandler} checked={input.gender === 'Female'} /> Female&nbsp;&nbsp;
                                    <input type="radio" name="gender" value="Other" onChange={inputHandler} checked={input.gender === 'Other'} /> Other
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Age</label>
                                <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Phone Number</label>
                                <input type="number" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Looking For</label>
                                <select className="form-select" name="lookingFor" value={input.lookingFor} onChange={inputHandler}>
                                    <option value="" selected disabled hidden>Select</option>
                                    <option value="friendship">Friendship</option>
                                    <option value="relationship">Relationship</option>
                                    <option value="casual">Casual</option>
                                    <option value="long-term">Long-term</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Interested In</label>
                                <select className="form-select" name="interestedIn" value={input.interestedIn} onChange={inputHandler}>
                                    <option value="" selected disabled hidden>Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Everyone</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-control" name="location" value={input.location} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Relationship Status</label>
                                <select className="form-select" name="relationshipStatus" value={input.relationshipStatus} onChange={inputHandler}>
                                    <option value="" selected disabled hidden>Select</option>
                                    <option value="single">Single</option>
                                    <option value="in_a_relationship">In a Relationship</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="complicated">It's Complicated</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Education</label>
                                <input type="text" className="form-control" name="education" value={input.education} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Profession</label>
                                <input type="text" className="form-control" name="profession" value={input.profession} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Languages (comma separated)</label>
                                <input type="text" className="form-control" name="languages" value={input.languages} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Hobbies (comma separated)</label>
                                <input type="text" className="form-control" name="hobbies" value={input.hobbies} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <label className="form-label">Instagram Link</label>
                                <input type="text" className="form-control" name="instagramLink" value={input.instagramLink} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" onClick={onButtonClick}>Create Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register