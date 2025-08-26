import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-orange-600" />
              <span>info@buildcraft.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-orange-600" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-600">BuildCraft</div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">Construction & Design</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="#home" className="py-2 px-4 text-gray-700 hover:bg-orange-50 rounded-md transition-colors">Home</a>
              <a href="#services" className="py-2 px-4 text-gray-700 hover:bg-orange-50 rounded-md transition-colors">Services</a>
              <a href="#about" className="py-2 px-4 text-gray-700 hover:bg-orange-50 rounded-md transition-colors">About</a>
              <a href="#contact" className="py-2 px-4 text-gray-700 hover:bg-orange-50 rounded-md transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;