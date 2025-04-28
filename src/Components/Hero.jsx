import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white h-[90vh] flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Business With Us</h2>
      <p className="mb-8 text-lg md:text-xl max-w-2xl">We provide the best digital solutions to boost your brand presence and sales.</p>
      <Link to="/home">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default Hero;
