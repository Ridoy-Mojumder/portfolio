import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-2xl font-bold">Ridoy Mojumder</h2>
                        <p className="text-gray-400 mt-1">Front-End Developer</p>
                    </div>
                    <div className="flex space-x-6 mb-4 lg:mb-0">
                        <a href="https://www.facebook.com/ridoy.mojumder.5654" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.475v-9.304h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.463.099 2.794.144v3.24l-1.917.001c-1.504 0-1.794.714-1.794 1.761v2.31h3.588l-.467 3.622h-3.121v9.304h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ridoy-mojumder/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12.281c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.281 12.281h-3v-5.604c0-1.336-.025-3.063-1.866-3.063-1.867 0-2.153 1.459-2.153 2.966v5.701h-3v-11h2.875v1.5h.041c.401-.761 1.379-1.562 2.836-1.562 3.032 0 3.594 1.996 3.594 4.591v6.471z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Ridoy-Mojumder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.51 2.34 1.07 2.91.82.09-.65.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.03.79-.22 1.64-.33 2.48-.33s1.69.11 2.48.33c1.9-1.3 2.73-1.03 2.73-1.03.54 1.37.2 2.39.1 2.64.63.7 1.02 1.59 1.02 2.68 0 3.85-2.35 4.69-4.58 4.93.36.31.67.92.67 1.86 0 1.35-.01 2.43-.01 2.77 0 .27.18.59.69.49 3.97-1.33 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10z" />
                            </svg>
                        </a>
                        <a href="https://x.com/170Ridoy16533" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.569c-.885.385-1.83.641-2.825.755a4.993 4.993 0 002.165-2.723 9.966 9.966 0 01-3.127 1.184 4.928 4.928 0 00-8.453 4.482 13.978 13.978 0 01-10.16-5.145c-.375.646-.59 1.4-.59 2.203 0 1.519.775 2.858 1.953 3.642a4.935 4.935 0 01-2.231-.616c-.054 1.898 1.319 3.693 3.292 4.092-.571.155-1.171.237-1.785.237-.44 0-.871-.043-1.293-.123.872 2.719 3.397 4.7 6.396 4.754a9.898 9.898 0 01-6.1 2.101c-.398 0-.79-.023-1.174-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.051 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.635.961-.694 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1RPx4Q8arJ5hAtFj__SCntrDoKu260U-b/view"
                            target="_blank"
                            download >
                            <span className="relative z-10 flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                                Download Resume{' '}
                                <FiDownload className="ml-2 w-5 h-5" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-800 pt-6 text-gray-400 text-center">
                    &copy; 2024 Ridoy Mojumder. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
