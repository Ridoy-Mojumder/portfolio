import React from 'react';
import { motion } from 'framer-motion';
import { DiCss3 } from 'react-icons/di'; // Import relevant icons from react-icons
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub, FaPython, FaCuttlefish, FaServer } from 'react-icons/fa'; // Import relevant icons from react-icons/fa

const Skills = () => {
    // Array of skill cards
    const skillCards = [
        {
            icon: <FaReact className="text-6xl text-blue-600 mb-4 mx-auto" />,
            title: 'React',
            description: 'Building user interfaces with React'
        },
        {
            icon: <FaDatabase className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'MongoDB',
            description: 'NoSQL database for modern applications'
        },
        {
            icon: <FaNodeJs className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'Node.js',
            description: 'Server-side JavaScript runtime'
        },
        {
            icon: <FaHtml5 className="text-6xl text-orange-600 mb-4 mx-auto" />,
            title: 'HTML5',
            description: 'Markup language for creating web pages'
        },
        {
            icon: <FaCss3Alt className="text-6xl text-blue-600 mb-4 mx-auto" />,
            title: 'CSS3',
            description: 'Styling language for web development'
        },
        {
            icon: <FaJs className="text-6xl text-yellow-600 mb-4 mx-auto" />,
            title: 'JavaScript',
            description: 'Programming language for the web'
        },
        {
            icon: <DiCss3 className="text-6xl text-indigo-600 mb-4 mx-auto" />,
            title: 'Tailwind',
            description: 'Utility-first CSS framework'
        },
        {
            icon: <FaDatabase className="text-6xl text-yellow-600 mb-4 mx-auto" />,
            title: 'Firebase',
            description: 'Cloud Firestore and Realtime Database'
        },
        {
            icon: <FaGithub className="text-6xl text-gray-700 mb-4 mx-auto" />,
            title: 'Git & GitHub',
            description: 'Version control and collaboration platform'
        },
        {
            icon: <FaPython className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'Django',
            description: 'High-level Python web framework'
        },
        {
            icon: <FaCuttlefish className="text-6xl text-blue-600 mb-4 mx-auto" />,
            title: 'C++',
            description: 'General-purpose programming language'
        },
        {
            icon: <RiNextjsFill className="text-6xl text-black mb-4 mx-auto" />,
            title: 'Next.js',
            description: 'React framework for server-side rendering'
        },
        {
            icon: <FaServer className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'Express.js',
            description: 'Fast, unopinionated, minimalist web framework for Node.js'
        }
    ];

    return (
        <div className="relative bg-gray-900">
            <div id="skills" className="skills-section pt-16 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-8 text-center relative text-white">
                        <span className="text-transparent inline-block mb-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            Skills
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Map through skillCards array and render all cards */}
                        {skillCards.map((skill, index) => (
                            <motion.div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center"
                                whileHover={{ scale: 1.05, translateY: -10 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {skill.icon}
                                <h3 className="text-2xl font-semibold text-indigo-400 mt-4">{skill.title}</h3>
                                <p className="mt-2 text-lg text-white">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
