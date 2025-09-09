import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hammer, Clipboard, Building, CheckCircle, HardHat, FileCheck, Banknote, Clock } from 'lucide-react';
import Header from '../Header';

const ConstructionService = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    whileInView: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceFeatures = [
    {
      icon: <HardHat size={24} className="text-amber-500" />,
      title: "Expert Team",
      description: "Industry professionals with years of specialized experience"
    },
    {
      icon: <CheckCircle size={24} className="text-amber-500" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage of construction"
    },
    {
      icon: <Clock size={24} className="text-amber-500" />,
      title: "Timely Delivery",
      description: "Projects completed within agreed timelines"
    },
    {
      icon: <Banknote size={24} className="text-amber-500" />,
      title: "Transparent Pricing",
      description: "Clear cost structure with no hidden charges"
    }
  ];

  return (
    <><Header />
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div 
        className="relative py-16 bg-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center space-y-4 mb-12"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Construction Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming visions into reality with expert craftsmanship and sustainable solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/construction1.jpg"
                alt="Construction Workspace"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-3 text-amber-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Building size={28} />
                <h2 className="text-2xl font-bold">BuildCraft Excellence</h2>
              </motion.div>
              <p className="text-gray-700 text-lg leading-relaxed">
                BuildCraft offers comprehensive construction solutions for commercial and residential spaces. 
                Our team of experts approaches each project with a unique perspective, aiming to deliver 
                spaces that are not only aesthetically pleasing but also sustainable and functional.
              </p>
              <div className="pt-4">
                {/* <motion.button 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Request Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose BuildCraft</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and attention to detail sets us apart
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {serviceFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Pre-Construction Virtual Design */}
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-amber-600">
                <Clipboard size={24} />
                <h2 className="text-2xl font-bold">Pre-Construction Virtual Design</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We build your project virtually before the first brick is laid. Using state-of-the-art tools, 
                our detailed plans and designs ensure perfect alignment with your requirements, helping you 
                visualize your dream space before construction begins.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>2D floor plans and furniture layouts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Electrical, plumbing, and ceiling drawings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Structural and service drawings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>3D visualization for better spatial understanding</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/virtual-design.jpg"
                alt="Virtual Design Process"
                className="rounded-lg w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/construction1.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Approvals from Relevant Government Authorities */}
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="order-2 md:order-1 bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/approvals.jpg"
                alt="Government Approvals Process"
                className="rounded-lg w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/construction2.jpg";
                }}
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3 text-amber-600">
                <FileCheck size={24} />
                <h2 className="text-2xl font-bold">Regulatory Compliance & Approvals</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                BuildCraft ensures that all projects adhere to applicable regulations set by government 
                authorities. We handle the complex approval process, preparing and submitting all necessary 
                documentation to secure timely permits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Document preparation and consultation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Plan preparation and submission</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Regulatory compliance management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>Liaison with authorities for smooth approvals</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Capital Approval from Bank */}
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-amber-600">
                <Banknote size={24} />
                <h2 className="text-2xl font-bold">Financial Solutions & Funding Support</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our financial experts guide you through the loan approval process, ensuring all necessary 
                paperwork is submitted correctly for smooth and successful financing. We provide end-to-end 
                support from consultation to final approval.
              </p>
              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mt-4">
                <h3 className="font-semibold text-amber-800 mb-2">Our Financial Support Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Consultation for optimal loan amount and terms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Bank selection and document preparation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Application submission and follow-up</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Clear communication at every stage</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/financial.jpg"
                alt="Financial Services"
                className="rounded-lg w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/construction1.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Construction Project Management */}
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="order-2 md:order-1 bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/construction2.jpg"
                alt="Construction Project Management"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3 text-amber-600">
                <Hammer size={24} />
                <h2 className="text-2xl font-bold">Construction Project Management</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our involvement from the earliest stages enables our team to execute your project effectively. 
                We determine the most time-efficient, cost-effective, and quality-focused construction methods 
                to bring your vision to life.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Pre-Construction</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Planning & strategy</li>
                    <li>• Budget estimation</li>
                    <li>• Material sourcing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Construction</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Quality supervision</li>
                    <li>• Progress tracking</li>
                    <li>• Safety management</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Logistics</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Material management</li>
                    <li>• Vendor coordination</li>
                    <li>• Delivery scheduling</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Completion</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Final inspections</li>
                    <li>• Documentation</li>
                    <li>• Client handover</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="py-16  text-slate-950"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
            Contact our team today for a consultation and discover how we can bring your vision to life with quality, efficiency, and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link to="/portfolio">
           
            <motion.button 
              className="bg-transparent border-2 border-slate-950 text-slate-950 font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
           </Link>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default ConstructionService;
