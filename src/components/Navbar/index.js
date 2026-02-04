import React, { useState } from 'react'


const NavbarIndex = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero', icon: 'fa-solid fa-house' },
        { name: 'About', href: '#about', icon: 'fa-solid fa-user' },
        { name: 'Education', href: '#education', icon: 'fa-solid fa-graduation-cap' },
        { name: 'Contact', href: '#contact', icon: 'fa-solid fa-envelope' }
    ]

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{ zIndex: 9999 }}>
            <div className="container">
                <a className="navbar-brand fw-bold" href="#hero">
                    {name}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    className="nav-link"
                                    href={item.href}
                                    onClick={handleLinkClick}
                                >
                                    <i className={`${item.icon} me-1`}></i>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarIndex