import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-blue-600 text-white flex items-center justify-center">
      {/* Optional Background Overlay */}
      <div className="absolute inset-0 bg-blue-700/40 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Grow Your Business With Us
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          We provide the best digital solutions to boost your brand presence and sales.
        </p>
        <Link to="/home">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
