import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">Contact Us</h3>
        <p className="text-center text-gray-600 mb-10">We’d love to hear from you. Let’s connect!</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center text-gray-700">
              <FiMail className="text-2xl mr-4 text-blue-600" />
              <a href="mailto:info@bizname.com" className="hover:text-blue-500">info@bizname.com</a>
            </div>
            <div className="flex items-center text-gray-700">
              <FiPhone className="text-2xl mr-4 text-blue-600" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FiMapPin className="text-2xl mr-4 text-blue-600" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md p-6 rounded-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
