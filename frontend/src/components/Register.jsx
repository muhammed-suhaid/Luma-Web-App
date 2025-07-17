import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, changeInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [output, changetOutput] = useState({

        status: "",
        result: {
            userId: "",
            firstName: "",
            lastName: "",
            emailAddress: ""
        }

    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value });
    }

    const onButtonClick = () => {
        axios.post("http://localhost:4000/register", input)
            .then((response) => {
                console.log("Response : ", response.data)
                changetOutput(response.data)
                navigate('/complete-profile')
            })
            .catch(() => { alert("Registration failed!") })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            {/* Image */}
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center">
                                <img
                                    src='https://i.pinimg.com/1200x/ae/9d/c2/ae9dc21e4c008a468ee017d6606abaa4.jpg'
                                    alt="image"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                                ></img>
                            </div>
                            {/* Form */}
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="card shadow">
                                    <div className="card-body p-5">
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                            <h3 align="center">Register Now</h3>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                            <label htmlFor="" className="form-label">First Name</label>
                                            <input type="text" className="form-control" name="firstName" value={input.firstName} onChange={inputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                            <label htmlFor="" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" name="lastName" value={input.lastName} onChange={inputHandler} />
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
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-success" type="button" onClick={onButtonClick}>Register</button>
                                            </div>
                                        </div>
                                    </div>
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