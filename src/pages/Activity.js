import React from 'react'
import ProfileData from '../configurations/data/ProfileData'

const Activity = () => {
    const { activities, internships } = ProfileData

    return (
        <div className="min-vh-100 bg-light py-5" id="activity">
            <div className="container py-5">

                {/* Internship Section */}
                {internships && internships.length > 0 && (
                    <div className="mb-5">
                        <div className="text-center mb-5">
                            <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill mb-3 fw-bold tracking-wider">PROFESSIONAL EXPERIENCE</span>
                            <h2 className="display-4 fw-bold">Internships</h2>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {internships.map((intern, index) => (
                                <div key={index} className="col-lg-6">
                                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden hover-translate-up h-100">
                                        <div className="card-body p-4 p-lg-5">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 text-primary">
                                                    <i className="fa-solid fa-briefcase"></i>
                                                </div>
                                                <div>
                                                    <h3 className="h5 fw-bold mb-1">{intern.company}</h3>
                                                    <p className="text-muted mb-0 small uppercase fw-bold tracking-wide">{intern.years}</p>
                                                </div>
                                            </div>
                                            <h4 className="card-title fw-bold text-primary mb-3">{intern.title}</h4>
                                            <p className="card-text text-secondary white-space-pre-line mb-0" style={{ whiteSpace: 'pre-line' }}>
                                                {intern.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="my-5 opacity-10" />
                    </div>
                )}

                <div className="text-center mb-5">
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3 fw-bold tracking-wider">MY PARTICIPATION</span>
                    <h2 className="display-4 fw-bold">Activities & Events</h2>
                    <p className="lead text-muted">A collection of workshops, hackathons, and community services.</p>
                </div>

                <div className="row g-4">
                    {activities && activities.map((activity, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-translate-up group">
                                <div className="position-relative overflow-hidden">
                                    <img
                                        src={activity.image}
                                        className="card-img-top object-fit-cover transition-transform duration-500 hover-scale-img"
                                        alt={activity.title}
                                        style={{ height: '240px' }}
                                    />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <span className="badge bg-white text-dark shadow-sm">
                                            {activity.date}
                                        </span>
                                    </div>
                                </div>

                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3">{activity.title}</h5>
                                    <p className="card-text text-secondary mb-4">{activity.description}</p>

                                    <div className="d-flex flex-wrap gap-2">
                                        {activity.tags && activity.tags.map((tag, i) => (
                                            <span key={i} className="badge bg-light text-secondary border border-light-subtle rounded-pill fw-normal">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Activity