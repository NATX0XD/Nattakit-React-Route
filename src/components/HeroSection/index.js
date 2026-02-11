import React from 'react'
import { HeroData } from '../../configurations/data/HeroData'

const HeroSection = () => {
    return (
        <section id="hero" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden bg-light">
            <div className="container position-relative z-1">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 mt-5 mt-lg-0 text-center text-lg-start">
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold">
                            👋 Welcome to my Web pages
                        </span>
                        <h1 className="display-3 fw-bold mb-3 lh-sm">
                            Hi, I'm <span className="text-primary position-relative d-inline-block">
                                {HeroData.name}
                                <svg className="position-absolute w-100 start-0 bottom-0 text-primary opacity-25" height="12" viewBox="0 0 100 12" fill="currentColor" style={{ zIndex: -1 }}>
                                    <path d="M0 12C20 12 80 12 100 12" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <h2 className="h2 text-secondary fw-normal mb-4">{HeroData.role}</h2>
                        <p className="lead text-muted mb-5 w-lg-75">
                            {HeroData.description}
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <a href="/contact" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm hover-translate-up">
                                Let's Talk
                            </a>
                            <a href="https://github.com/NATX0XD?tab=repositories" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-lg rounded-pill px-5 hover-translate-up">
                                View Work
                            </a>
                        </div>

                        <div className="mt-5 d-flex gap-4 justify-content-center justify-content-lg-start align-items-center">
                            <span className="text-muted small fw-bold text-uppercase tracking-wider">Follow Me</span>
                            <div className="d-flex gap-3">
                                {HeroData.socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className="text-secondary hover-primary transition-all fs-5"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="position-relative">
                            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-primary opacity-10 rounded-circle blur-3xl animate-pulse" style={{ maxWidth: '400px', maxHeight: '400px', filter: 'blur(80px)' }}></div>
                            <img
                                src={HeroData.image}
                                alt={HeroData.name}
                                className="img-fluid position-relative z-2 hero-image animate-float"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
