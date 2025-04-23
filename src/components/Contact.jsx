// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend or email service)
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      
      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md mt-4 hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
        {isSubmitted && (
          <div className="mt-4 text-center text-green-500">Your message has been sent!</div>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-800 hover:text-blue-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-500 transition" />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-3xl text-red-500 hover:text-blue-500 transition" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
