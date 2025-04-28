import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h3>
        <p className="text-gray-600 mb-6">Ready to work with us? Let's talk about your project!</p>
        <a href="mailto:info@bizname.com" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
