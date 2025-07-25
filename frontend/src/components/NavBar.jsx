import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand active text-light" aria-current="page" to="/home">Luma</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/explore">Explore</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link className="btn btn-outline-light me-2" to="/register">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar