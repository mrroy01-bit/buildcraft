import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, MessageSquare, PenTool, Users, CheckCircle, Compass, Palette, Eye } from 'lucide-react';
import Header from '../Header';

const DesignConsultation = () => {
  const designApproach = [
    {
      icon: <Compass size={24} className="text-purple-500" />,
      title: "Strategic Planning",
      description: "We analyze your goals and objectives to create a comprehensive design strategy"
    },
    {
      icon: <Palette size={24} className="text-purple-500" />,
      title: "Creative Direction",
      description: "Our team provides artistic guidance and innovative design concepts"
    },
    {
      icon: <Eye size={24} className="text-purple-500" />,
      title: "Attention to Detail",
      description: "We focus on every element to ensure a cohesive and polished final result"
    },
    {
      icon: <Users size={24} className="text-purple-500" />,
      title: "Collaborative Process",
      description: "We work closely with clients to bring their vision to life"
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Hero Section */}
        <div className="relative py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Design Consultation</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming spaces through thoughtful design and expert consultation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/consultation1.jpg"
                  alt="Office Space"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-purple-600">
                  <PenTool size={28} />
                  <h2 className="text-2xl font-bold">BuildCraft Design Excellence</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At BuildCraft, we create simple, elegant, and functional designs across residential, 
                  commercial, and hospitality sectors. We believe interior design should be straightforward yet 
                  impactful. Our talented team brings unique design insights focused on creating visually 
                  appealing experiences tailored to your specific requirements and aesthetic preferences.
                </p>
                <div className="pt-4">
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2 hover:scale-105 transition-transform"
                  >
                    <span>Book a Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Design Approach</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We combine creativity, functionality, and technical expertise to deliver exceptional design solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designApproach.map((approach, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            {/* Proactive Communication */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-purple-600">
                  <MessageSquare size={24} />
                  <h2 className="text-2xl font-bold">Proactive Communication</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We listen attentively to ensure nothing is overlooked. Through proactive and consistent 
                  communication, we analyze your goals, vision, and challenges to create the perfect space 
                  you envision. Our comprehensive analysis targets the specific problems you want to address 
                  in the design process.
                </p>
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 mt-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Our Communication Process:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>In-depth discovery sessions to understand your vision</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Regular updates throughout the design process</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Feedback integration at every stage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Clear, transparent discussions about possibilities and constraints</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="/images/communication.jpg"
                  alt="Design Communication Process"
                  className="rounded-lg w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/consultation1.jpg";
                  }}
                />
              </div>
            </div>

            {/* Innovative Ideation */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="/images/ideation.jpg"
                  alt="Innovative Design Process"
                  className="rounded-lg w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/consultation2.jpg";
                  }}
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center space-x-3 text-purple-600">
                  <Lightbulb size={24} />
                  <h2 className="text-2xl font-bold">Innovative Ideation</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Once we've documented your requirements, we begin the ideation and design process. 
                  We develop concepts for floor plans, furniture layouts, ceiling plans, and other 
                  essential elements. These designs undergo continuous feedback to ensure maximum 
                  client satisfaction.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Space Planning</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Functional layouts</li>
                      <li>• Traffic flow analysis</li>
                      <li>• Spatial optimization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Visual Design</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Color schemes</li>
                      <li>• Material selection</li>
                      <li>• Lighting concepts</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Plans</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Detailed drawings</li>
                      <li>• 3D visualizations</li>
                      <li>• Specification documents</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Prototyping</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Mockups</li>
                      <li>• Material samples</li>
                      <li>• Concept testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* On-Site Consultations */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-purple-600">
                  <Users size={24} />
                  <h2 className="text-2xl font-bold">On-Site Consultations</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We coordinate closely with contractors and other professionals to ensure the project 
                  is executed exactly as conceptualized. Our expert designers conduct regular site visits 
                  to monitor progress and address any challenges that arise. Through constant communication, 
                  we minimize the need for clients to frequently visit the site themselves.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Regular site inspections to ensure design integrity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Real-time problem solving and adaptation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Coordination between all project stakeholders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Detailed progress reports with photographic documentation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="/images/consultation2.jpg"
                  alt="On-Site Consultation"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Sectors */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Design Sectors We Serve</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our expertise extends across various environments, each with specialized design considerations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative rounded-xl overflow-hidden group h-80 hover:-translate-y-2 transition-transform">
                <img 
                  src="/images/residential.jpg" 
                  alt="Residential Design"
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/consultation1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Residential</h3>
                  <p className="text-white/90">Creating comfortable and personalized living spaces that reflect your lifestyle</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group h-80 hover:-translate-y-2 transition-transform">
                <img 
                  src="/images/commercial.jpg" 
                  alt="Commercial Design"
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/consultation1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial</h3>
                  <p className="text-white/90">Designing productive and inspiring workspaces that enhance business operations</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group h-80 hover:-translate-y-2 transition-transform">
                <img 
                  src="/images/hospitality.jpg" 
                  alt="Hospitality Design"
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/consultation2.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Hospitality</h3>
                  <p className="text-white/90">Creating memorable experiences through thoughtful and immersive environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-purple-600 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-purple-100 mb-8 max-w-3xl mx-auto">
              Contact our design team today for a consultation and discover how we can bring your vision to life with creativity, expertise, and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors duration-300 hover:scale-105 transition-transform"
              >
                Schedule Consultation
              </button>
              <button 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 hover:scale-105 transition-transform"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignConsultation;
