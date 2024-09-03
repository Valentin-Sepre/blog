"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaUser, FaBell, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div
                className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 text-yellow-500 mt-10">
                    <Link href="accueil" passHref>
                        <div className="cursor-pointer py-2 text-lg hover:text-white inline-block mr-2" onClick={toggleMenu}>
                            <FaHome />
                            Accueil
                        </div>
                    </Link>
                    <Link href="/mon-compte" passHref>
                        <div className="cursor-pointer py-2 text-lg hover:text-white" onClick={toggleMenu}>
                            <FaUser  />
                            Mon compte
                        </div>
                    </Link>
                    <Link href="/notifications" passHref>
                        <div className="cursor-pointer py-2 text-lg hover:text-white" onClick={toggleMenu}>
                            <FaBell  />
                            Notifications
                        </div>
                    </Link>
                    <Link href="/messages" passHref>
                        <div className="cursor-pointer py-2 text-lg hover:text-white" onClick={toggleMenu}>
                            <FaEnvelope />
                            Messages
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}>
                <nav className="p-4 text-lg text-white">
                    <div className="mx-auto flex justify-between items-center">
                        <div className="font-bold">
                            <Link href="accueil" passHref>
                                <div className="text-yellow-500 cursor-pointer text-center text-2xl">Together</div>
                            </Link>
                        </div>
                        <div className="cursor-pointer text-yellow-500" onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </div>
                    </div>
                </nav>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
            )}
        </div>
    );
};

export default Navbar;
