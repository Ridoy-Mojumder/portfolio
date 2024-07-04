import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="relative h-16 w-16 mr-2">
                        {/* Background circle with gradient */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="absolute inset-0 w-full h-full"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
                        </svg>
                        
                        {/* Logo text */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="absolute inset-0 w-full h-full fill-current text-white"
                        >
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontSize="48" // Increased font size for larger logo
                                fontFamily="Arial, Helvetica, sans-serif"
                            >
                                RM
                            </text>
                        </svg>

                        {/* Background shadow */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 opacity-50 rounded-full shadow-lg"></div>
                    </div>
                    
                </div>
                <ul className="flex space-x-4 md:space-x-6 items-center">
                    {/* Menu items */}
                    <li>
                        <a
                            href="#home"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                Home
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                About
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                Projects
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                Skills
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                Education
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="relative group flex items-center"
                        >
                            <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-300">
                                Contact
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1RPx4Q8arJ5hAtFj__SCntrDoKu260U-b/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3 rounded-md md:flex hidden shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center">
                                Download Resume{' '}
                                <FiDownload className="ml-2 w-5 h-5" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-50 rounded-full transition-opacity duration-300 hover:opacity-75"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
