import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DiCss3 } from 'react-icons/di'; // Import relevant icons from react-icons
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub, FaPython, FaCuttlefish, FaServer } from 'react-icons/fa'; // Import relevant icons from react-icons/fa

// Import the background image URL
const backgroundImageUrl = 'https://i.ibb.co/BwdZC59/particles.jpg';

const Skills = () => {
    const [showAllSkills, setShowAllSkills] = useState(false);

    // Array of skill cards
    const skillCards = [
        {
            icon: <FaReact className="text-6xl text-blue-600 mb-4 mx-auto" />,
            title: 'React',
            description: 'Building user interfaces'
        },
        {
            icon: <FaDatabase className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'MongoDB',
            description: 'NoSQL database'
        },
        {
            icon: <FaNodeJs className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'Node.js',
            description: 'Server-side JavaScript'
        },
        {
            icon: <FaHtml5 className="text-6xl text-orange-600 mb-4 mx-auto" />,
            title: 'HTML5',
            description: 'Markup language for the web'
        },
        {
            icon: <FaCss3Alt className="text-6xl text-blue-600 mb-4 mx-auto" />,
            title: 'CSS3',
            description: 'Styling language for the web'
        },
        {
            icon: <FaJs className="text-6xl text-yellow-600 mb-4 mx-auto" />,
            title: 'JavaScript',
            description: 'Programming language for the web'
        },
        {
            icon: <DiCss3 className="text-6xl text-indigo-600 mb-4 mx-auto" />,
            title: 'Tailwind',
            description: 'CSS framework'
        },
        {
            icon: <FaDatabase className="text-6xl text-yellow-600 mb-4 mx-auto" />,
            title: 'Firebase',
            description: 'Backend-as-a-Service platform'
        },
        {
            icon: <FaGithub className="text-6xl text-gray-700 mb-4 mx-auto" />,
            title: 'Git & GitHub',
            description: 'Version control system'
        },
        {
            icon: <FaPython className="text-6xl text-green-600 mb-4 mx-auto" />,
            title: 'Django',
            description: 'Python web framework'
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
            description: 'Web application framework for Node.js'
        }
    ];

    // Function to toggle showing all skills
    const toggleShowAllSkills = () => {
        setShowAllSkills(!showAllSkills);
    };

    return (
        <div className="flex flex-wrap justify-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div id="skills" className="skills-section pt-16 pb-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-8 text-center relative">
                        <span className="text-transparent inline-block mb-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            Skills
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-8">
                        {/* Map through skillCards array and render only first 6 or all depending on showAllSkills */}
                        {skillCards.map((skill, index) => (
                            <motion.div key={index} className={`block p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center ${showAllSkills || index < 6 ? 'block' : 'hidden'}`}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {skill.icon}
                                <h3 className="text-2xl font-semibold text-indigo-600">{skill.title}</h3>
                                <p className="mt-4 text-lg">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* See more button */}
                    {!showAllSkills && (
                        <div className="flex justify-center mt-8">
                            <button onClick={toggleShowAllSkills} className="bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                                See More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
