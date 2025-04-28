import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Welcome Section */}
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to Home Page!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thank you for choosing our services. Explore more with us and take your business to new heights.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 max-w-6xl">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">We ensure quick and reliable solutions tailored for your business needs.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">24/7 Support</h3>
          <p className="text-gray-600">Our team is available around the clock to assist you at every step.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Affordable Pricing</h3>
          <p className="text-gray-600">Get the best value for your investment without compromising on quality.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 mb-10">
        <Link to="/">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Go Back to Landing Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
