import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">&copy; 2024 Together. All rights reserved.</p>
                    <p>
                        <a href="#" className="hover:text-yellow-500">Privacy Policy</a> | <a href="#" className="hover:text-yellow-500">Terms of Service</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer