import React from 'react'

// About Section receives props: personalInfo, contact
const AboutSection = ({ personalInfo, contact }) => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">
                    <i className="fa-solid fa-user me-2"></i>
                    About Me
                </h2>

                <div className="row justify-content-center g-3">
                    {/* Personal Info */}
                    <div className="col-12 col-lg-5">
                        <div className="card border-0 shadow h-100">
                            <div className="card-header bg-dark text-white py-2">
                                <h6 className="mb-0">
                                    <i className="fa-solid fa-id-card me-2"></i>
                                    Personal Information
                                </h6>
                            </div>
                            <div className="card-body p-3">
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Full Name</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.fullName}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Nickname</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.nickname}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Age</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.age} years old</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Date of Birth</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.dateOfBirth}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Nationality</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.nationality}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 text-muted small">Religion</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.religion}</div>
                                </div>
                                <div className="row">
                                    <div className="col-5 text-muted small">Address</div>
                                    <div className="col-7 fw-semibold small">{personalInfo.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-lg-5">
                        <div className="card border-0 shadow h-100">
                            <div className="card-header bg-dark text-white py-2">
                                <h6 className="mb-0">
                                    <i className="fa-solid fa-address-book me-2"></i>
                                    Contact Information
                                </h6>
                            </div>
                            <div className="card-body p-3">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                                        <i className="fa-solid fa-envelope small"></i>
                                    </div>
                                    <div className="overflow-hidden">
                                        <small className="text-muted d-block">Email</small>
                                        <span className="fw-semibold small text-break">{contact.email}</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                                        <i className="fa-solid fa-phone small"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted d-block">Phone</small>
                                        <span className="fw-semibold small">{contact.phone}</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                                        <i className="fa-brands fa-line small"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted d-block">Line</small>
                                        <span className="fw-semibold small">{contact.line}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
