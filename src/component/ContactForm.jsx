import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactForm = () => {
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-800 to-transparent opacity-30"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-full mb-3">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Dream Project</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and let's create something amazing together
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-700 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                <path d="M0 0h80v80H0z" fill="none"></path>
                <path d="M20 20h40v40H20z" fill="white"></path>
              </svg>
            </div>
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-lg text-gray-300 max-w-md">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Contact Information */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <div className="w-8 h-1 bg-orange-500 mr-3"></div>
                      Contact Us
                    </h3>
                  </div>
                  
                  <div className="flex items-start group transition-all duration-300 p-4 rounded-xl hover:bg-gray-700 hover:bg-opacity-50">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                      <p className="text-gray-300">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start group transition-all duration-300 p-4 rounded-xl hover:bg-gray-700 hover:bg-opacity-50">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">Email</h4>
                      <p className="text-gray-300">info@buildcraft.com</p>
                      <p className="text-gray-300">projects@buildcraft.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group transition-all duration-300 p-4 rounded-xl hover:bg-gray-700 hover:bg-opacity-50">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">Locations</h4>
                      <p className="text-gray-300">Noida, Uttar Pradesh</p>
                      <p className="text-gray-300">Lucknow, Uttar Pradesh</p>
                      <p className="text-gray-300">Varanasi, Uttar Pradesh</p>
                    </div>
                  </div>

                  <div className="flex items-start group transition-all duration-300 p-4 rounded-xl hover:bg-gray-700 hover:bg-opacity-50">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-amber-400 transition-colors">Working Hours</h4>
                      <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-300">Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-8">
                  <div className="bg-gray-700 bg-opacity-20 p-8 rounded-2xl border border-gray-600">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <div className="w-8 h-1 bg-orange-500 mr-3"></div>
                      Send a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                            <option value="modular-kitchen">Modular Kitchen</option>
                            <option value="architecture">Architecture</option>
                            <option value="complete-construction">Complete Construction</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="location" className="block text-sm font-semibold mb-2 text-gray-200">Preferred Location *</label>
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
                      </div>

                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-200">Project Details</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
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
                            Send Message
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;