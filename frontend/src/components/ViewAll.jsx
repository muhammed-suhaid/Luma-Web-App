import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import img1 from '../assets/images/suhaid.jpg';
import img2 from '../assets/images/navaneeth.jpg';
import img3 from '../assets/images/anand.jpg';
import img4 from '../assets/images/wizz.jpg';
import img5 from '../assets/images/nevin.jpg';
import img6 from '../assets/images/meghana.jpg';
import img7 from '../assets/images/binu.jpg';
import img8 from '../assets/images/akshay.jpg';
import img9 from '../assets/images/sana.jpg';
import img10 from '../assets/images/akshaya.jpg';
import img11 from '../assets/images/yaser.jpg';
import img12 from '../assets/images/gautham.jpg';
import img13 from '../assets/images/abhinand.jpg';


const ViewAll = () => {
    // variables
    const [profiles, setProfiles] = useState({
        "status": "",
        "count": "",
        "data": []
    })
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fetching data from db
    const fetchProfiles = () => {
        axios.post("http://localhost:4000/users")
            .then((response) => {
                console.log(response.data.data)
                setProfiles(response.data.data)
            })
            .catch((error) => {
                console.log("Error fetching profiles", error)
            })
    }

    const localImages = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,img13
    ];


    // converting image url
    const convertDriveLink = (originalLink) => {
        console.log("Original Link:", originalLink);

        const match = originalLink?.match(/\/d\/(.+?)\//);
        const newLink = match ? `http://drive.google.com/uc?export=view&id=${match[1]}` : originalLink;

        console.log("Converted Link:", newLink);
        return newLink;
    };

    // calling fetchdata when reloading
    useEffect(() => { fetchProfiles() }, [])

    // Going to next Profile by index
    const nextProfile = () => {
        if (currentIndex < profiles.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            alert("No more profiles!")
        }
    };

    // Showing current profile
    const currentProfile = profiles[currentIndex]

    return (
        <div>
            <NavBar />
            <div className="container mt-3">
                {currentProfile ? (
                    <div className="row p-5 m-3 shadow">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                {/*Image */}
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center">
                                    <img
                                        src={localImages[currentIndex % localImages.length]}
                                        // src="https://drive.google.com/uc?export=view&id=1rfQbMNXQmat38U3fGS7agIkMEghdWH5s"
                                        alt="Profile"
                                        className="img-fluid rounded shadow"
                                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                                    ></img>
                                </div>

                                {/* Profiles Details */}
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-4">
                                    <h4>{currentProfile.name}</h4>
                                    <p>{currentProfile.bio}</p>
                                    <p>
                                        {currentProfile.age}
                                        {currentProfile.gender === "Male" && <i className="bi bi-gender-male text-primary ms-2"></i>}
                                        {currentProfile.gender === "Female" && <i className="bi bi-gender-female text-danger ms-2"></i>}
                                        {currentProfile.gender === "Other" && <i className="bi bi-gender-ambiguous text-secondary ms-2"></i>}
                                    </p>
                                    <p>
                                        <a
                                            href={currentProfile.instagramLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-outline-danger"
                                        >
                                            <i className="bi bi-instagram me-2"></i>Instagram
                                        </a>
                                    </p>
                                    <p><strong>Looking For : </strong> {currentProfile.lookingFor}</p>
                                    <p><strong>Interested In : </strong> {currentProfile.interestedIn}</p>
                                    <p>{currentProfile.location}</p>
                                    <p><strong>Education : </strong> {currentProfile.education}</p>
                                    <p><strong>Profession : </strong> {currentProfile.profession}</p>
                                    <p><strong>Languages:</strong></p>
                                    <ul>
                                        {currentProfile.languages.map((lang, index) => (
                                            <li key={index}>{lang}</li>
                                        ))}
                                    </ul>
                                    <p><strong>Hobbies:</strong></p>
                                    <ul>
                                        {currentProfile.hobbies.map((hobby, index) => (
                                            <li key={index}>{hobby}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <button className="btn btn-outline-danger me-2" onClick={nextProfile}>Dislike</button>
                                        <button className="btn btn-outline-success" onClick={nextProfile}>Like</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center">Loading profile...</p>
                )}
            </div>
        </div >
    )
}

export default ViewAll