import React from 'react'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            {/* Carousel Section */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/premium-photo/man-woman-enjoy-coffee-date-cafe_1022970-57125.jpg" className="d-block w-100" alt="" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Real Connections</h5>
                            <p>Connect through values, interests, and emotional depth.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/6c/ea/d8/6cead8947a7efc3b6f84cc7a8e77f901.jpg" className="d-block w-100" alt="" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Genuine Profiles</h5>
                            <p>Photo + Video uploads make every profile feel real.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/32/8b/d6/328bd605485c48ffe9f286afd602321c.jpg" className="d-block w-100" alt="" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>No Premium Barriers</h5>
                            <p>Chat for free—powered by short video ads, not subscriptions.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <br /><br /><br />
            {/* Heading */}
            <div className="text-center mt-5 mb-4">
                <h1 className="fw-bold text-danger" style={{ fontSize: '3.5rem' }}>Welcome to Luma</h1>
                <p className="lead fs-4">For the ones who light up your world ✨</p>
            </div>
            <br /><br /><br />

            {/* Features Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">What Makes Luma Different?</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-person-video3 fs-1 text-danger"></i>
                        <h5 className="mt-2">Video Profiles</h5>
                        <p>Users upload a video to ensure authenticity and reduce fake accounts.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-heart-pulse fs-1 text-success"></i>
                        <h5 className="mt-2">Emotional Compatibility</h5>
                        <p>Matching based on shared values, personality, and lifestyle—not just looks.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-currency-dollar fs-1 text-warning"></i>
                        <h5 className="mt-2">No Paywall for Chat</h5>
                        <p>Chat freely after watching a short ad. No subscription needed.</p>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-shield-lock fs-1 text-primary"></i>
                        <h5 className="mt-2">Verified Users</h5>
                        <p>Email/phone authentication and admin review keeps the platform safe.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-filter-square fs-1 text-info"></i>
                        <h5 className="mt-2">Smart Matching</h5>
                        <p>Advanced filters and compatibility-based matching improve discovery.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <i className="bi bi-emoji-smile fs-1 text-secondary"></i>
                        <h5 className="mt-2">Lightweight & Modern</h5>
                        <p>Built with speed and simplicity in mind using modern tech (Flutter).</p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-dark text-light text-center py-4 mt-5">
                <div className="container">
                    <p className="mb-1">&copy; {new Date().getFullYear()} Luma ❤️</p>
                    <p className="mb-1">Crafted with care by passionate developers</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://instagram.com" className="text-light" target="_blank" rel="noreferrer">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a href="https://github.com" className="text-light" target="_blank" rel="noreferrer">
                            <i className="bi bi-github fs-5"></i>
                        </a>
                        <a href="mailto:contact@luma.app" className="text-light">
                            <i className="bi bi-envelope fs-5"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage