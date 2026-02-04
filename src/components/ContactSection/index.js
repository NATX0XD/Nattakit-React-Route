const ContactSection = ({ contact, socialLinks }) => {
    return (
        <section id="contact" className="py-4 bg-dark text-white">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    
                    <div className="col-12 mb-3">
                        <h5 className="fw-bold mb-0">
                            <i className="fa-solid fa-address-book me-2"></i>
                            Contact Me
                        </h5>
                    </div>

                    
                    <div className="col-12 col-md-auto mb-2 mb-md-0">
                        <span className="me-4">
                            <i className="fa-solid fa-envelope me-1"></i>
                            <small>{contact.email}</small>
                        </span>
                        <span>
                            <i className="fa-solid fa-phone me-1"></i>
                            <small>{contact.phone}</small>
                        </span>
                    </div>

                    
                    <div className="col-12 mt-2">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="text-white mx-2 fs-5"
                                title={link.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
