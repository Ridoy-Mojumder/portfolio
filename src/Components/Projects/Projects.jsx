import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            name: "HealthTrack",
            description: "Diagnostic Center Management System",
            stack: "MERN stack (MongoDB, Express.js, React.js, Node.js)",
            features: [
                "Optimized for mobile, tablet, and desktop views",
                "User Authentication with Firebase",
                "User and Admin Dashboards",
                "Security: JWT authentication",
                "Additional Features: Banner management, statistics"
            ],
            liveLink: "https://health-track-186e2.web.app/",
            profileImage: "https://i.ibb.co/jhYqfrS/Captuhealthre.png"
        },
        {
            name: "TestJourny",
            description: "Restaurant Management System",
            stack: "MERN stack (MongoDB, Express.js, React.js, Node.js)",
            features: [
                "Food Management: Add, delete, and modify menu items",
                "Customer Interaction: Profiles, order history, feedback, and gallery",
                "Intuitive, responsive design",
                "Security: JWT authentication, secure data management"
            ],
            liveLink: "https://tastejourney-45991.web.app/",
            profileImage: "https://i.ibb.co/2NtFfwG/Captutestre.png"
        },
        {
            name: "Art and Craft Store",
            description: "Art and Craft E-commerce Platform",
            stack: "MERN stack (MongoDB, Express.js, React.js, Node.js)",
            features: [
                "Art Management: Add, delete, and modify items",
                "Customer Interaction: Profiles, order history, feedback, and gallery",
                "Intuitive, responsive design",
                "Security: JWT authentication, secure data management"
            ],
            liveLink: "https://tangerine-snickerdoodle-50d788.netlify.app/",
            profileImage: "https://i.ibb.co/2jtPvR0/Captsure.png"
        },
        {
            name: "Dream Home",
            description: "Home Finder Website",
            stack: "React.js, Firebase, Tailwind CSS",
            features: [
                "Detailed Home Viewing with photos and descriptions",
                "Location Mapping on an interactive map",
                "Registration and Login for personalized experiences"
            ],
            liveLink: "https://6620c5d2fab17a13346391d4--astonishing-panda-79ee78.netlify.app/",
            profileImage: "https://i.ibb.co/M6PgMV3/Capsssture.png"
        }
    ];

    return (
        <motion.div className="bg-gray-900 text-white min-h-screen py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="container mx-auto px-6 relative" id='projects'>

                {/* Background shape on the left side */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 z-0" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl font-bold mb-8 text-center relative">
                        <span className="text-transparent inline-block my-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            Projects
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div key={index} className="border-2 border-gray-700 p-6 rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="relative mb-4">
                                    <img src={project.profileImage} alt={project.name} className="rounded-lg shadow-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black rounded-lg">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-bold">View Live</a>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-green-500 mb-2">{project.name}</h2>
                                <p className="text-lg text-gray-400 mb-2">{project.description}</p>
                                <p className="text-lg mb-4"><strong>Stack:</strong> {project.stack}</p>
                                <ul className="mb-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="mb-2">{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
