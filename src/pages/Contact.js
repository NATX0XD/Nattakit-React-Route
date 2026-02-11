import React from 'react'
import ProfileData from '../configurations/data/ProfileData'
import { HeroData } from '../configurations/data/HeroData'

const Contact = () => {
    const { contact } = ProfileData
    const { socialLinks } = HeroData

    const contactItems = [
        {
            icon: "fa-solid fa-envelope",
            title: "Email",
            value: contact.email,
            link: `mailto:${contact.email}`,
            color: "primary"
        },
        {
            icon: "fa-solid fa-phone",
            title: "Phone",
            value: contact.phone,
            link: `tel:${contact.phone}`,
            color: "success"
        },
        {
            icon: "fa-brands fa-line",
            title: "Line",
            value: contact.line,
            link: `https://line.me/ti/p/~${contact.line.replace('@', '')}`,
            color: "info"
        }
    ]

    return (
        <div className="min-vh-100 bg-light py-5 d-flex align-items-center" id="contact">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wider">GET IN TOUCH</span>
                    <h2 className="display-4 fw-bold">Let's Connect</h2>
                    <p className="lead text-muted w-lg-50 mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="row g-4 justify-content-center mb-5">
                    {contactItems.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <a href={item.link} target="_blank" rel="noreferrer" className="text-decoration-none col-12">
                                <div className={`card h-100 border-0 shadow-sm rounded-4 hover-translate-up text-center p-4 bg-white group`}>
                                    <div className={`mx-auto bg-${item.color} bg-opacity-10 p-4 rounded-circle mb-4 text-${item.color} transition-transform duration-300 group-hover-scale`} style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className={`${item.icon} fs-2`}></i>
                                    </div>
                                    <h3 className="h5 fw-bold text-dark">{item.title}</h3>
                                    <p className="text-muted mb-0">{item.value}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="fw-bold text-uppercase text-muted small mb-4 tracking-wider">Follow Me On Social Media</p>
                    <div className="d-flex justify-content-center gap-3">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} className="btn btn-white shadow-sm rounded-circle p-3 hover-scale text-primary" target="_blank" rel="noreferrer" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={`${social.icon} fs-4`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact