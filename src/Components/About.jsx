import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-12">
        {/* Image */}
        <div className="mb-10 md:mb-0 md:w-1/2">
          <img
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">About Us</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a passionate team committed to delivering exceptional digital solutions that help businesses grow and thrive in the modern era.
          </p>
          <p className="text-gray-600">
            With a focus on innovation, customer success, and continuous improvement, we aim to create long-term value and trusted partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
