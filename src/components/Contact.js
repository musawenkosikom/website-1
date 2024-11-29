import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_1i5dgfb', // Replace with your EmailJS service ID
      'template_q1xa0x8', // Replace with your EmailJS template ID
      formData,
      '_izLWgBqNbjpg5EBO' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <FadeInSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-400 placeholder-gray-600 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-400 placeholder-gray-600 transition-all duration-300"
              />
            </div>
            
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-400 placeholder-gray-600 transition-all duration-300"
            />
            
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-400 placeholder-gray-600 transition-all duration-300"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;

