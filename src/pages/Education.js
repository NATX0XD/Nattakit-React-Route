import React from 'react'
import ProfileData from '../configurations/data/ProfileData'

const Education = () => {
    const { education } = ProfileData

    return (
        <div className="min-vh-100 bg-light py-5" id="education">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wider">ACADEMIC JOURNEY</span>
                    <h2 className="display-4 fw-bold">Education</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 position-relative">
                        {/* Timeline Line */}
                        <div className="position-absolute d-none d-md-block h-100 border-start border-2 border-primary border-opacity-25" style={{ left: '2rem' }}></div>

                        <div className="d-flex flex-column gap-5">
                            {education.map((edu, index) => (
                                <div key={index} className="position-relative ps-md-5 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                                    {/* Timeline Dot */}
                                    <div className="position-absolute d-none d-md-flex justify-content-center align-items-center rounded-circle bg-primary text-white shadow-sm"
                                        style={{ left: '1rem', top: '0', tuple: 'translate(-50%)', width: '2rem', height: '2rem', zIndex: 1 }}>
                                        <i className="fa-solid fa-graduation-cap small"></i>
                                    </div>

                                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden hover-scale">
                                        <div className="card-body p-4 p-lg-5">
                                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    {edu.logo && (
                                                        <div className="bg-white p-2 rounded-3 shadow-sm border" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                                                            <img src={edu.logo} alt={edu.school} className="w-100 h-100 object-fit-contain" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        {edu.url ? (
                                                            <a href={edu.url} target="_blank" rel="noreferrer" className="text-decoration-none hover-opacity">
                                                                <h3 className="h5 fw-bold text-primary mb-1">{edu.school} <i className="fa-solid fa-arrow-up-right-from-square small ms-1 opacity-50"></i></h3>
                                                            </a>
                                                        ) : (
                                                            <h3 className="h5 fw-bold text-primary mb-1">{edu.school}</h3>
                                                        )}
                                                        <p className="lead fw-normal mb-0 fs-6 text-muted">{edu.degree}</p>
                                                    </div>
                                                </div>
                                                <span className="badge bg-dark text-white rounded-pill px-3 py-2 mt-3 mt-md-0 shadow-sm border border-light">
                                                    {edu.year}
                                                </span>
                                            </div>

                                            <hr className="opacity-10 my-4" />

                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 text-primary">
                                                            <i className="fa-solid fa-book-open"></i>
                                                        </div>
                                                        <div>
                                                            <small className="text-muted d-block text-uppercase fw-bold">Major</small>
                                                            <span className="fw-medium">{edu.major}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {edu.faculty && (
                                                    <div className="col-md-6">
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3 text-info">
                                                                <i className="fa-solid fa-building-columns"></i>
                                                            </div>
                                                            <div>
                                                                <small className="text-muted d-block text-uppercase fw-bold">Faculty</small>
                                                                <span className="fw-medium">{edu.faculty}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {edu.gpa && (
                                                <div className="mt-4 pt-3 border-top border-light">
                                                    <span className="fw-bold text-primary">GPA: {edu.gpa}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education