import React, { useState, useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: 'noida',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700 relative"
        style={{ animation: 'scaleIn 0.3s ease-out' }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-full mb-3">
              Get Free Quote
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white">
              Tell Us About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Project</span>
            </h2>
            <p className="text-lg text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Thank You!</h3>
              <p className="text-lg text-gray-300 max-w-md">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-200">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-20 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-200">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-20 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-200">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-20 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-200">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-20 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="modular-kitchen">Design Consultation</option>
                    <option value="architecture">Space Refurbishing</option>
                    <option value="complete-construction">Turnkey Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200">Preferred Location *</label>
                <div className="grid grid-cols-3 gap-4">
                  {['noida', 'lucknow', 'varanasi'].map((loc) => (
                    <label 
                      key={loc} 
                      className={`flex items-center justify-center p-3 border ${formData.location === loc ? 'bg-orange-500 border-orange-600' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'} rounded-lg cursor-pointer transition-colors text-center`}
                    >
                      <input
                        type="radio"
                        name="location"
                        value={loc}
                        checked={formData.location === loc}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="capitalize">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-200">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-20 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2" size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Add CSS animation */}
      <style jsx="true">{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ContactFormPopup;
