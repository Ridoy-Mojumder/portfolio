import React from 'react';
import { motion } from 'framer-motion';

// Sample SVG icons (replace with actual SVG icons)
const FacebookIcon = () => (
    <a href="https://www.facebook.com/ridoy.mojumder.5654" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.475v-9.304h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.463.099 2.794.144v3.24l-1.917.001c-1.504 0-1.794.714-1.794 1.761v2.31h3.588l-.467 3.622h-3.121v9.304h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
        </svg>
    </a>
);

const LinkedInIcon = () => (
    <a href="https://www.linkedin.com/in/ridoy-mojumder/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12.281c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.281 12.281h-3v-5.604c0-1.336-.025-3.063-1.866-3.063-1.867 0-2.153 1.459-2.153 2.966v5.701h-3v-11h2.875v1.5h.041c.401-.761 1.379-1.562 2.836-1.562 3.032 0 3.594 1.996 3.594 4.591v6.471z" />
        </svg>
    </a>
);

const GitHubIcon = () => (
    <a href="https://github.com/Ridoy-Mojumder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.51 2.34 1.07 2.91.82.09-.65.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.03.79-.22 1.64-.33 2.48-.33s1.69.11 2.48.33c1.9-1.3 2.73-1.03 2.73-1.03.54 1.37.2 2.39.1 2.64.63.7 1.02 1.59 1.02 2.68 0 3.85-2.35 4.69-4.58 4.93.36.31.67.92.67 1.86 0 1.35-.01 2.43-.01 2.77 0 .27.18.59.69.49 3.97-1.33 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10z" />
        </svg>
    </a>
);

const BannerSection = () => {
    return (
        <div id='home' className="relative overflow-hidden bg-gray-900 text-white mt-12">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 z-0" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-12 md:py-24 px-6 md:px-0">
                {/* Left Column: Introduction */}
                <div className="md:w-1/2 relative mb-8 md:mb-0 pl-10 flex flex-col items-center md:items-start justify-center h-full">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-4xl md:text-6xl font-extrabold mb-4 text-center md:text-left"
                    >
                        Hi, I'm Ridoy Mojumder
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-300 text-base md:text-lg mb-8 text-center md:text-left max-w-lg leading-relaxed"
                    >
                        I'm a passionate front-end developer specializing in React, Next.js, and CSS frameworks, dedicated to creating intuitive and visually appealing web experiences.
                    </motion.p>

                    {/* Hire Me Button */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex justify-between items-center gap-6"
                    >
                        <motion.a
                            href="#projects" // Replace with your actual section link
                            className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-400 transition duration-300 inline-block flex items-center"
                        >
                            <span className="mr-2">Hire Me</span>
                        </motion.a>
                        <div className="flex justify-around gap-6">
                            <FacebookIcon />
                            <LinkedInIcon />
                            <GitHubIcon />
                        </div>
                    </motion.div>
                </div>
                {/* Right Column: Image */}
                <div className="md:w-1/2 relative md:pl-8 flex justify-center items-center">
                    <motion.img
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        src="https://i.ibb.co/h9DzbXz/DSC-1193-1-removebg-preview.png"
                        alt="Banner Image"
                        className="w-full rounded-lg shadow-lg md:max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
