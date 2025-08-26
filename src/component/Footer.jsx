import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ChevronRight, Heart, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative pt-20 pb-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full filter blur-[150px] opacity-10"></div>
      
      {/* Back to top button */}
      <div className="absolute top-6 right-6 md:right-12">
        <a 
          href="#top" 
          className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-2 rounded-full shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUpCircle size={24} />
        </a>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Logo and newsletter signup */}
        <div className="mb-16 lg:w-2/3 mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">BuildCraft</div>
          </div>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Professional construction, interior design, and architectural services across Uttar Pradesh. 
            Building dreams into reality since 2009.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://facebook.com" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:shadow-lg group">
              <Facebook size={20} className="text-gray-400 group-hover:text-orange-400" />
            </a>
            <a href="https://twitter.com" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:shadow-lg group">
              <Twitter size={20} className="text-gray-400 group-hover:text-orange-400" />
            </a>
            <a href="https://instagram.com" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:shadow-lg group">
              <Instagram size={20} className="text-gray-400 group-hover:text-orange-400" />
            </a>
            <a href="https://linkedin.com" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:shadow-lg group">
              <Linkedin size={20} className="text-gray-400 group-hover:text-orange-400" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          {/* Services - 3 columns on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 h-1 w-8 absolute -bottom-2 left-0 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              {['Interior Design', 'Modular Kitchen', 'Architecture', 'Construction', 'Project Management', 'Consultation'].map((service, index) => (
                <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                  <a href="#services" className="hover:text-orange-400 transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-orange-400" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations - 3 columns on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 h-1 w-8 absolute -bottom-2 left-0 rounded-full"></span>
              Service Areas
            </h3>
            <ul className="space-y-3 text-gray-300">
              {['Noida, UP', 'Lucknow, UP', 'Varanasi, UP'].map((location, index) => (
                <li key={index} className="flex items-center group">
                  <MapPin size={16} className="mr-2 text-orange-400 group-hover:animate-pulse" />
                  <span className="group-hover:text-white transition-colors">{location}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 relative">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 h-1 w-6 absolute -bottom-2 left-0 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-300 grid grid-cols-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#services', label: 'Services' },
                  { href: '#about', label: 'About' },
                  { href: '#contact', label: 'Contact' }
                ].map((link, index) => (
                  <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                    <a href={link.href} className="hover:text-orange-400 transition-colors flex items-center">
                      <ChevronRight size={16} className="mr-2 text-orange-400" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - 6 columns on large screens */}
          <div className="lg:col-span-6">
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 h-1 w-8 absolute -bottom-2 left-0 rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-5 text-gray-300">
              <div className="bg-white bg-opacity-5 p-4 rounded-xl hover:bg-opacity-10 transition-all duration-300 flex items-start">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg mr-4 self-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Call Us</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-5 p-4 rounded-xl hover:bg-opacity-10 transition-all duration-300 flex items-start">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg mr-4 self-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email Us</h4>
                  <p className="text-gray-400">info@buildcraft.com</p>
                  <p className="text-gray-400">projects@buildcraft.com</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-5 p-4 rounded-xl hover:bg-opacity-10 transition-all duration-300 flex items-start">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg mr-4 self-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Our Coverage</h4>
                  <p className="text-gray-400">Serving across Uttar Pradesh with offices in Noida, Lucknow, and Varanasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} BuildCraft. All rights reserved. Made with <Heart size={14} className="mx-1 text-orange-500 fill-orange-500 animate-pulse" /> in India
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-orange-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
