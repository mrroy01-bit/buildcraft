import React from 'react';
import { Home, ChefHat, Building2, MapPin, ArrowRight, Check, Star, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Interior Designer',
      tagline: 'Transform Your Space',
      icon: Home,
      description: 'Transform your spaces with our expert interior design services tailored to your style and needs.',
      locations: ['Noida', 'Lucknow', 'Varanasi'],
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'from-orange-600 to-orange-700',
      lightColor: 'orange-100',
      textColor: 'orange-600',
      features: [
        'Professional space planning & layout design',
        'Custom color palette & material selection',
        'Realistic 3D visualization',
        'High-quality furniture & decor sourcing'
      ],
      timeline: '4-6 weeks',
      rating: 4.9,
      URL: '/interior-design'
    },
    {
      title: 'Design Consultation',
      tagline: 'Functional Elegance',
      icon: ChefHat,
      description: 'Expert design consultation services to help you create the perfect space.',
      locations: ['Noida', 'Lucknow', 'Varanasi'],
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'from-teal-600 to-teal-700',
      lightColor: 'teal-100',
      textColor: 'teal-600',
      features: [
        'Personalized design advice & recommendations',
        'Space optimization & layout planning',
        'Material & finish selection guidance',
        'Budget-friendly design solutions'
      ],
      timeline: '3-5 weeks',
      rating: 4.8,
      URL: '/design-consultation'
    },
    {
      title: 'Space Refurbishing',
      tagline: 'Revitalize Your Environment',
      icon: Building2,
      description: 'Comprehensive space refurbishing services to breathe new life into your property.',
      locations: ['Noida', 'Lucknow', 'Varanasi'],
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'from-indigo-600 to-indigo-700',
      lightColor: 'indigo-100',
      textColor: 'indigo-600',
      features: [
        'Complete renovation & remodeling services',
        'Structural repairs & upgrades',
        'Modern design & aesthetic improvements',
        'End-to-end project management'
      ],
      timeline: '8-12 weeks',
      rating: 4.9,
      URL: '/space-refurbishing'
    },
    {
      title: 'Turnkey Solutions',
      tagline: 'Hassle-Free Project Delivery',
      icon: Building2,
      description: 'Comprehensive turnkey solutions for seamless project execution from start to finish.',
      locations: ['Noida', 'Lucknow', 'Varanasi'],
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      lightColor: 'green-100',
      textColor: 'green-600',
      features: [
        'Single point of contact for all project phases',
        'Integrated design & construction services',
        'Timely delivery & budget management',
        'Post-occupancy support & maintenance'
      ],
      timeline: '12-16 weeks',
      rating: 4.8,
      URL: '/turnkey-space'
    },
    {
      title: 'Construction Services',
      tagline: 'Building Your Vision',
      icon: Building2,
      description: 'Professional construction services to bring your architectural designs to life.',
      locations: ['Noida', 'Lucknow', 'Varanasi'],
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      lightColor: 'blue-100',
      textColor: 'blue-600',
      features: [
        'Experienced project management team',
        'Quality craftsmanship & materials',
        'Adherence to timelines & budgets',
      ],
      timeline: '8-12 weeks',
      rating: 4.7,
      URL: '/construction-service'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-70"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-medium rounded-full mb-3">
            Professional Services
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive construction and design solutions tailored to your needs across Noida, Lucknow, and Varanasi. 
            Our team of experts delivers excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Card with stacked layers effect */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl shadow-lg transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {/* Card header */}
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
                        <service.icon size={36} className="text-white" />
                      </div>
                      <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        <Star size={14} className="mr-1" />
                        <span>{service.rating}/5</span>
                      </div>
                    </div>
                    
                    <span className="inline-block text-sm font-medium px-2 py-1 bg-white bg-opacity-20 rounded-full mb-3">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center mt-4 text-sm">
                      <Clock size={16} className="mr-1" />
                      <span>Typical timeline: {service.timeline}</span>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <div className={`w-6 h-1 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                      Available in
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.locations.map((location, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center rounded-full px-3 py-1 text-sm font-medium`}
                          style={{
                            backgroundColor: service.lightColor === 'orange-100' ? '#ffedd5' : 
                                           service.lightColor === 'teal-100' ? '#ccfbf1' : 
                                           service.lightColor === 'indigo-100' ? '#e0e7ff' : '#f3f4f6',
                            color: service.textColor === 'orange-600' ? '#ea580c' : 
                                  service.textColor === 'teal-600' ? '#0d9488' : 
                                  service.textColor === 'indigo-600' ? '#4f46e5' : '#4b5563'
                          }}
                        >
                          <MapPin size={14} className="mr-1" />
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <div className={`w-6 h-1 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <div 
                            className="p-1 rounded-full mr-3 mt-1"
                            style={{
                              backgroundColor: service.lightColor === 'orange-100' ? '#ffedd5' : 
                                             service.lightColor === 'teal-100' ? '#ccfbf1' : 
                                             service.lightColor === 'indigo-100' ? '#e0e7ff' : '#f3f4f6'
                            }}
                          >
                            <Check 
                              size={14} 
                              style={{
                                color: service.textColor === 'orange-600' ? '#ea580c' : 
                                      service.textColor === 'teal-600' ? '#0d9488' : 
                                      service.textColor === 'indigo-600' ? '#4f46e5' : '#4b5563'
                              }}
                            />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => window.location.href = service.URL} className={`w-full bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg transform hover:scale-[1.02]`}>
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 rounded-3xl relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <svg className="absolute left-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M0 .5H31.5V32" fill="none" stroke="white"></path>
              </svg>
              <svg className="absolute right-0 bottom-0 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M0 .5H31.5V32" fill="none" stroke="white"></path>
              </svg>
            </div>
            
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Looking for a Custom Solution?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer comprehensive construction and design packages tailored to your specific needs. 
                Contact our team for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-[1.02]">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border border-white border-opacity-20 px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;