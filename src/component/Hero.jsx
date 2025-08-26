import React from 'react';
import { ArrowRight, CheckCircle, Award, Home, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 lg:py-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium mb-6 animate-bounce">
              Trusted Construction Partner
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Building Dreams</span>
              <span className="relative">
                Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Reality</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-400 opacity-70" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="3"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-gray-200 leading-relaxed">
              Professional construction, interior design, and architectural services with a 
              <span className="font-semibold text-orange-300"> commitment to excellence</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-orange-400" />
                <span>Noida</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-orange-400" />
                <span>Lucknow</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-orange-400" />
                <span>Varanasi</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                <span className="flex items-center justify-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
              <button className="relative overflow-hidden border-2 border-white hover:border-orange-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 group">
                <span className="relative z-10 group-hover:text-gray-900 transition-colors">View Our Work</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500 bg-opacity-20 rounded-lg">
                      <Award className="text-orange-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">15+ Years Experience</h3>
                      <p className="text-gray-300 mt-1">Expertise that delivers quality results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg">
                      <CheckCircle className="text-blue-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">500+ Projects Completed</h3>
                      <p className="text-gray-300 mt-1">From homes to commercial spaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500 bg-opacity-20 rounded-lg">
                      <Home className="text-green-400" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">100% Client Satisfaction</h3>
                      <p className="text-gray-300 mt-1">Our clients are our best advocates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;