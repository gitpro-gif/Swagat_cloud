import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-4">Web Development</h4>
            <p className="text-gray-600">Building responsive, high-quality websites that drive success.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-4">Marketing Strategy</h4>
            <p className="text-gray-600">Creating strategies that turn visitors into loyal customers.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-4">Brand Identity</h4>
            <p className="text-gray-600">Building brands that people love and trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
