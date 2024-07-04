import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaLaptopCode, FaAward } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <motion.div id="about" className="bg-gray-900 text-white min-h-screen flex items-center pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 relative">
                {/* Background shape */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 z-0" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-5xl font-bold mb-8 text-center relative">
                        <span className="text-transparent inline-block mb-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            About Me
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                    </h1>

                    {/* Personal Info */}
                    <motion.div className="mb-12 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg mb-4">
                            Hello! I'm Ridoy Mojumder, a junior Front-end Developer passionate about web development.
                        </p>
                        <p className="text-lg mb-4">
                            Over the past year, I've focused on web development, with a deep interest in React and back-end technologies like Django. I'm currently pursuing a BSc in Engineering.
                        </p>
                    </motion.div>

                    {/* Experience and Projects */}
                    <motion.div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* Individual hover effects */}
                        <motion.div className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaCode className="text-6xl text-green-500 mb-4" />
                            <h2 className="text-3xl font-bold text-green-500 mb-2">1+</h2>
                            <p className="text-lg">Years of Experience</p>
                        </motion.div>
                        <motion.div className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaProjectDiagram className="text-6xl text-blue-500 mb-4" />
                            <h2 className="text-3xl font-bold text-blue-500 mb-2">6+</h2>
                            <p className="text-lg">Projects Completed</p>
                        </motion.div>
                        <motion.div className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaLaptopCode className="text-6xl text-yellow-500 mb-4" />
                            <h2 className="text-3xl font-bold text-yellow-500 mb-2">4+</h2>
                            <p className="text-lg">Projects in Django</p>
                        </motion.div>
                        <motion.div className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaAward className="text-6xl text-purple-500 mb-4" />
                            <h2 className="text-3xl font-bold text-purple-500 mb-2">30%</h2>
                            <p className="text-lg">Job Achievement</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
