import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Welcome Section */}
      <div className="text-center mt-20 px-4">
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

      {/* About Section */}
      <div className="mt-20 px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg">
          We are a passionate team of developers, designers, and marketers committed to building digital products that make a difference. Our mission is to help businesses grow through innovative, user-centric solutions.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20 px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Ravi Sharma',
              text: 'Absolutely top-notch service. Quick turnaround and professional communication!',
            },
            {
              name: 'Aisha Khan',
              text: 'I loved how simple the process was. Highly recommend to anyone serious about quality!',
            },
            {
              name: 'David Lee',
              text: 'They helped us scale efficiently and improve our customer experience significantly.',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>
              <h4 className="text-blue-700 font-semibold text-right">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-20 bg-white p-8 rounded-lg shadow-md w-full max-w-3xl text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Stay in the Loop</h3>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for updates and exclusive content.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* CTA Section */}
      <div className="mt-20 mb-10 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Ready to explore more?</h3>
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
