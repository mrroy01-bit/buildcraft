import React from 'react';
import { Award, Users, Clock, Shield, CheckCircle, Star, MessageSquare, Quote } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: Award, 
      value: '15+', 
      label: 'Years Experience', 
      description: 'Serving clients since 2009',
      color: 'from-orange-500 to-orange-600',
      lightColor: 'from-orange-100 to-orange-200'
    },
    { 
      icon: Users, 
      value: '500+', 
      label: 'Happy Clients', 
      description: 'Across Uttar Pradesh',
      color: 'from-indigo-500 to-indigo-600',
      lightColor: 'from-indigo-100 to-indigo-200'
    },
    { 
      icon: Clock, 
      value: '95%', 
      label: 'On-Time Delivery', 
      description: 'Projects completed on schedule',
      color: 'from-teal-500 to-teal-600',
      lightColor: 'from-teal-100 to-teal-200'
    },
    { 
      icon: Shield, 
      value: '5 Yr', 
      label: 'Warranty', 
      description: 'On all our services',
      color: 'from-amber-500 to-amber-600',
      lightColor: 'from-amber-100 to-amber-200'
    }
  ];
  
  const qualities = [
    {
      title: "Expert Team",
      description: "Our team consists of certified architects, interior designers, and construction professionals with decades of combined experience.",
      icon: Award,
      color: "orange"
    },
    {
      title: "Premium Materials",
      description: "We source only the highest quality materials from trusted suppliers to ensure longevity and durability in every project.",
      icon: Shield,
      color: "teal"
    },
    {
      title: "Transparent Process",
      description: "From initial consultation to project completion, we maintain clear communication and transparency at every step.",
      icon: Clock,
      color: "indigo"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-medium rounded-full mb-3">
            About BuildCraft
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Excellence</span> Since 2009
          </h2>
          <p className="text-xl text-gray-600">
            With over 15 years of experience, we've established ourselves as a trusted name in construction 
            and design across Uttar Pradesh, delivering projects that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-medium rounded-full mb-6">
              <CheckCircle size={16} className="mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              The BuildCraft Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the construction industry, BuildCraft has established 
              itself as a trusted name across Uttar Pradesh. We specialize in creating spaces that 
              combine functionality with aesthetic appeal.
            </p>
            
            <div className="space-y-6 mb-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <div className={`bg-${quality.color}-100 p-3 rounded-xl mr-4 shadow-sm`}>
                    <quality.icon className={`text-${quality.color}-600`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{quality.title}</h3>
                    <p className="text-gray-600">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-200 rounded-full opacity-60"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full mb-6 shadow-sm">
                <Star size={16} className="mr-2" />
                Our Impact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                Building Success By Numbers
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
                    <div className={`inline-block p-4 rounded-xl mb-4 bg-gradient-to-r ${stat.lightColor} group-hover:${stat.color} transition-all duration-300`}>
                      <stat.icon size={32} className={`text-${stat.color.split('-')[0]}-600`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="font-medium text-gray-700 mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full filter blur-2xl opacity-40"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-2xl opacity-40"></div>
          
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-medium rounded-full mb-3">
              <MessageSquare size={16} className="mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Say About Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — see what our clients have to say about their experience with BuildCraft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full">
                  <Quote className="text-white" size={24} />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "BuildCraft transformed our commercial space beyond our expectations. Their attention to detail and commitment to quality was evident at every stage of the project."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">RM</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Rajesh Malhotra</h4>
                    <p className="text-sm text-gray-500">CEO, Horizon Enterprises</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 rounded-full">
                  <Quote className="text-white" size={24} />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "Working with BuildCraft was seamless from start to finish. They took our vision for our dream home and made it a reality while keeping us informed throughout the process."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">AS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Anita Sharma</h4>
                    <p className="text-sm text-gray-500">Homeowner, Lucknow</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-full">
                  <Quote className="text-white" size={24} />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "The BuildCraft team delivered our hotel renovation project on time and within budget. Their craftsmanship and professionalism set them apart from other contractors we've worked with."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">VG</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Vikram Gupta</h4>
                    <p className="text-sm text-gray-500">Manager, Royal Palace Hotel</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className={star < 5 ? "text-amber-400 fill-amber-400" : "text-amber-400"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
