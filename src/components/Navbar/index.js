import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { NavbarData } from '../../configurations/data/NavbarData';

const NavbarIndex = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-75 shadow-sm backdrop-blur' : 'bg-transparent'
                }`}
            style={{
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease-in-out',
                padding: scrolled ? '10px 0' : '20px 0'
            }}
        >
            <div className="container">
                <a className={`navbar-brand fw-bold fs-4 ${scrolled ? 'text-dark' : 'text-dark text-opacity-75'}`} href="/">
                    {process.env.REACT_APP_NAME}<span className="text-primary">.</span>
                </a>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-lg-4">
                        {NavbarData.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link
                                    className={`nav-link fw-medium position-relative hover-underline ${location.pathname === item.path ? 'active text-primary' : 'text-secondary'
                                        }`}
                                    to={item.path}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary rounded-pill px-4 ms-lg-4 fw-bold shadow-sm d-none d-lg-block">
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavbarIndex