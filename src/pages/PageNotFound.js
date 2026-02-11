import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light position-relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-10 blur-3xl animate-pulse" style={{ width: '300px', height: '300px', filter: 'blur(50px)' }}></div>
            <div className="position-absolute bottom-0 end-0 translate-middle rounded-circle bg-info opacity-10 blur-3xl animate-pulse" style={{ width: '400px', height: '400px', filter: 'blur(60px)', animationDelay: '2s' }}></div>

            <div className="text-center position-relative z-1 p-5 glass-card rounded-5 shadow-lg">
                <h1 className="display-1 fw-bold text-primary mb-0 animate-float" style={{ fontSize: '8rem', textShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>404</h1>
                <h2 className="h4 text-secondary mb-4">Page Not Found</h2>
                <p className="lead text-muted mb-5">
                    Oops! The page you are looking for disappeared into the void.
                </p>
                <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm hover-translate-up">
                    <i className="fa-solid fa-home me-2"></i>
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
