
const EducationSection = ({ education }) => {
    return (
        <section id="education" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">
                    <i className="fa-solid fa-graduation-cap me-2"></i>
                    Education
                </h2>

                <div className="row justify-content-center">
                    {education.map((edu, index) => (
                        <div key={index} className="col-md-8 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-dark text-white rounded-circle p-3 me-4">
                                            <i className="fa-solid fa-school fa-lg"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">{edu.degree} - {edu.major}</h5>
                                            <p className="text-muted mb-0">{edu.school}</p>
                                            <small className="text-secondary">{edu.year}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationSection
