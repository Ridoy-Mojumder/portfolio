import React from 'react';
import { FaSchool, FaGraduationCap, FaLaptopCode, FaUniversity, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            icon: <FaSchool className="text-green-500 text-4xl mb-4" />,
            title: "School Education",
            institution: "Char Bata Ram Govindha High School",
            description: "Completed my secondary education with a strong focus on science.",
        },
        {
            icon: <FaGraduationCap className="text-blue-500 text-4xl mb-4" />,
            title: "Diploma in Computer Science",
            institution: "Feni Polytechnic Institute",
            description: "Gained practical and theoretical knowledge in computer science and engineering.",
        },
        {
            icon: <FaUniversity className="text-red-500 text-4xl mb-4" />,
            title: "BSc in CSE",
            institution: "Bangladesh University of Business and Technology, Mirpur-2, Dhaka, Bangladesh",
            description: "Currently pursuing my Bachelor degree in Computer Science and Engineering.",
        },
        {
            icon: <FaLaptopCode className="text-indigo-500 text-4xl mb-4" />,
            title: "Web Development Course",
            institution: "Self-Learning",
            description: "Completed various web development courses to enhance my front-end skills.",
        },
        {
            icon: <FaPython className="text-yellow-500 text-4xl mb-4" />,
            title: "Web Development with Python Level-4",
            institution: "NSDA",
            description: "Completed the 'Web Development with Python Level-4' course under NSDA, further solidifying my expertise.",
        },
    ];

    return (
        <motion.div className="bg-gray-900 text-white min-h-screen flex items-center pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div id='education' className="container mx-auto px-6 relative">
                {/* Background shape on the left side */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 z-0" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl font-bold mb-8 text-center relative">
                        <span className="text-transparent inline-block my-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            Education
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {educationData.map((edu, index) => (
                            <motion.div key={index} className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105 text-center relative z-10"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                {edu.icon}
                                <h2 className="text-2xl font-bold text-green-500 mb-2">{edu.title}</h2>
                                <h3 className="text-xl font-semibold text-gray-400 mb-2">{edu.institution}</h3>
                                <p className="text-lg">{edu.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
