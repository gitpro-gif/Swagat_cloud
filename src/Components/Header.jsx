import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">BizName</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
