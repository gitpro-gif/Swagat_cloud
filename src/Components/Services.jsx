import React from 'react';
import { FaLaptopCode, FaBullhorn, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empowering your business with tailored digital solutions crafted for growth and long-term success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="text-blue-600 text-4xl mb-4">
              <FaLaptopCode />
            </div>
            <h4 className="text-xl font-semibold mb-2">Web Development</h4>
            <p className="text-gray-600">Building responsive, high-quality websites that drive success.</p>
          </div>

          {/* Marketing Strategy */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="text-green-600 text-4xl mb-4">
              <FaBullhorn />
            </div>
            <h4 className="text-xl font-semibold mb-2">Marketing Strategy</h4>
            <p className="text-gray-600">Creating strategies that turn visitors into loyal customers.</p>
          </div>

          {/* Brand Identity */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <div className="text-pink-600 text-4xl mb-4">
              <FaPaintBrush />
            </div>
            <h4 className="text-xl font-semibold mb-2">Brand Identity</h4>
            <p className="text-gray-600">Building brands that people love and trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
