import React from 'react'

// Footer receives props: name
const FooterIndex = ({ name }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-2">
            <div className="container text-center">
                <small className="mb-0">
                    © {currentYear} Copyright by Mr. {name}
                </small>
            </div>
        </footer>
    )
}

export default FooterIndex
