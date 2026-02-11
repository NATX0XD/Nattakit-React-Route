import React from 'react'


const FooterIndex = ({ name }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-2">
            <div className="container text-center">
                <small className="mb-0">
                    © {currentYear} Copyright by Mr. {process.env.REACT_APP_NAME}
                </small>
            </div>
        </footer>
    )
}

export default FooterIndex
