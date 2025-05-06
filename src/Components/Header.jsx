import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">BizName</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-blue-600">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
