import React from 'react'
import ProfileData from '../configurations/data/ProfileData'
import { HeroData } from '../configurations/data/HeroData'

const Contact = () => {
    const { contact } = ProfileData
    const { socialLinks } = HeroData

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center py-5" id="contact">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-5 bg-primary p-5 text-white position-relative overflow-hidden">
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-10" style={{ background: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                                    <div className="position-relative z-1 h-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <h3 className="display-6 fw-bold mb-4">Contact Information</h3>
                                            <p className="text-white-50 mb-5">I'm open to freelance opportunities and interesting projects.</p>

                                            <div className="d-flex flex-column gap-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                                                        <i className="fa-solid fa-envelope"></i>
                                                    </div>
                                                    <div>
                                                        <small className="text-white-50 d-block text-uppercase fw-bold">Email</small>
                                                        <span className="fw-medium">{contact.email}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                                                        <i className="fa-solid fa-phone"></i>
                                                    </div>
                                                    <div>
                                                        <small className="text-white-50 d-block text-uppercase fw-bold">Phone</small>
                                                        <span className="fw-medium">{contact.phone}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                                                        <i className="fa-brands fa-line"></i>
                                                    </div>
                                                    <div>
                                                        <small className="text-white-50 d-block text-uppercase fw-bold">Line</small>
                                                        <span className="fw-medium">{contact.line}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <div className="d-flex gap-3">
                                                {socialLinks.map((social, index) => (
                                                    <a key={index} href={social.url} className="btn btn-outline-light rounded-circle p-2" target="_blank" rel="noreferrer">
                                                        <i className={social.icon}></i>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 p-5 bg-white">
                                    <h2 className="display-6 fw-bold mb-4 text-primary">Send a Message</h2>
                                    <form>
                                        <div className="row g-4 mb-4">
                                            <div className="col-md-6">
                                                <label htmlFor="firstName" className="form-label text-muted fw-bold small text-uppercase">First Name</label>
                                                <input type="text" className="form-control form-control-lg bg-light border-0 rounded-3 px-4" id="firstName" placeholder="John" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="lastName" className="form-label text-muted fw-bold small text-uppercase">Last Name</label>
                                                <input type="text" className="form-control form-control-lg bg-light border-0 rounded-3 px-4" id="lastName" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label text-muted fw-bold small text-uppercase">Email Address</label>
                                            <input type="email" className="form-control form-control-lg bg-light border-0 rounded-3 px-4" id="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="message" className="form-label text-muted fw-bold small text-uppercase">Message</label>
                                            <textarea className="form-control form-control-lg bg-light border-0 rounded-3 px-4 py-3" id="message" rows="4" placeholder="Write your message here..."></textarea>
                                        </div>
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-primary btn-lg rounded-pill fw-bold py-3 shadow-sm hover-translate-up">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact