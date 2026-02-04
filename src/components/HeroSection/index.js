import React from 'react'

const HeroSection = ({ name, title, profileImage, bio }) => {
    return (
        <section id="hero" className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center justify-content-center">

                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img
                            src={profileImage}
                            alt={name}
                            className="rounded-circle shadow"
                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>


                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-5 fw-bold mb-2">{name}</h1>
                        <p className="lead text-muted mb-3">{title}</p>
                        <p className="text-secondary">{bio}</p>
                        <a href="#contact" className="btn btn-dark">
                            <i className="fa-solid fa-envelope me-2"></i>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
