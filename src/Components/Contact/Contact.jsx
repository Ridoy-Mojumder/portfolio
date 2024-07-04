import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your logic to handle form submission (e.g., send data to backend)

        // For demonstration, log the form data
        console.log(formData);

        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="relative bg-gray-900" id='contact'>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 z-0" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}></div>
            <div className="container mx-auto py-12 relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-center relative text-white">
                    <span className="text-transparent inline-block my-10 bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                        Contact Us
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                </h1>
                <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-900 text-white" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-900 text-white" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-900 text-white" required></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
