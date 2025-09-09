import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ArrowRight, Briefcase, Shield, Wrench } from 'lucide-react';
import Header from '../Header';

const TurnkeySpace = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    whileInView: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Wrench className="text-green-600" size={24} />,
      title: "End-to-End Solutions",
      description: "From conceptualization to handover, we manage every aspect of your project without requiring your intervention."
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Time-Efficient Delivery",
      description: "Our streamlined processes ensure your space is ready for occupancy within committed timelines."
    },
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      title: "Transparent Pricing",
      description: "Comprehensive cost structure with no hidden charges, ensuring you know exactly what you're paying for."
    },
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "Quality Assurance",
      description: "Rigorous quality control measures at every stage, backed by post-handover support and warranties."
    }
  ];

  return (
    <><Header />
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div 
        className="relative py-16 bg-green-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Turnkey <span className="text-green-600">Space Development</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                We transform empty spaces into fully-functional environments, handling every detail so you don't have to. From planning to execution, 
                we deliver exceptional results with a single point of responsibility.
              </motion.p>
              {/* <motion.button 
                className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation <ArrowRight size={18} />
              </motion.button> */}
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-green-100 rounded-3xl -z-10 transform rotate-3"></div>
              <img
                src="/images/turnkey.jpg"
                alt="Turnkey Space Development"
                className="rounded-2xl shadow-xl object-cover w-full aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        
        {/* Our Approach Section */}
        <motion.div 
          className="space-y-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Turnkey Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We deliver comprehensive, hassle-free solutions that transform empty spaces into fully-functional environments 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">1</div>
                  Turnkey, in its True Sense
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When we say "turnkey," we mean it. You receive a space that's ready for immediate use with zero effort on your part. 
                  Our comprehensive approach includes space planning, design development, construction, furnishing, and even technology integration—all 
                  managed by a single point of contact for seamless coordination.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Single-source responsibility from concept to completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Streamlined communication through dedicated project managers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">2</div>
                  Quality and Delivery Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our reputation is built on delivering exceptional quality within promised timelines. Our in-house team of architects, 
                  designers, engineers, and construction professionals work in perfect harmony, using proven methodologies and cutting-edge 
                  tools to ensure every detail meets our exacting standards.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Rigorous quality control at every project milestone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Transparent progress reporting and timeline management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">3</div>
                  Cost-Effective Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our turnkey approach actually saves you money. By integrating all services under one roof, we eliminate coordination 
                  inefficiencies, prevent costly miscommunications, and leverage our supplier relationships to secure the best materials 
                  and furnishings at competitive prices.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Transparent, comprehensive pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Value engineering options to maximize your budget</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">4</div>
                  Sustainability Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Environmental responsibility is integrated into every project we undertake. From energy-efficient lighting and HVAC systems 
                  to sustainable materials and waste reduction strategies, we create spaces that not only look beautiful and function 
                  perfectly but also minimize environmental impact.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Eco-friendly material options and energy-efficient systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Compliance with green building standards and certifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div 
          className="bg-green-50 rounded-3xl p-10 space-y-10"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Why our clients choose our turnkey solutions for their space development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Showcase */}
        <motion.div 
          className="space-y-10"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined approach to delivering turnkey excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 z-0 hidden md:block"></div>
            
            <div className="space-y-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 md:pr-12">
                  <div className="md:hidden w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                  <h3 className="text-2xl font-bold">Discovery & Planning</h3>
                  <p className="text-gray-700">
                    We begin by understanding your vision, requirements, and constraints through detailed consultations. 
                    Our team develops a comprehensive project plan including timeline, budget, and resource allocation.
                  </p>
                </div>
                <div className="relative">
                  <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 text-white rounded-full items-center justify-center font-bold">1</div>
                  <img 
                    src="/images/turnkey.jpg" 
                    alt="Discovery Phase" 
                    className="rounded-xl shadow-lg md:ml-8"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 text-white rounded-full items-center justify-center font-bold">2</div>
                  <img 
                    src="/images/turnkey.jpg" 
                    alt="Design Phase" 
                    className="rounded-xl shadow-lg md:mr-8"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4 md:pl-12">
                  <div className="md:hidden w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
                  <h3 className="text-2xl font-bold">Design & Engineering</h3>
                  <p className="text-gray-700">
                    Our design team creates detailed plans and 3D visualizations of your space. We handle all engineering 
                    aspects including structural, electrical, and mechanical systems to ensure technical excellence.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 md:pr-12">
                  <div className="md:hidden w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                  <h3 className="text-2xl font-bold">Construction & Implementation</h3>
                  <p className="text-gray-700">
                    Our experienced construction team brings the designs to life with meticulous attention to detail. 
                    We manage all contractors and suppliers, ensuring quality work and adherence to timelines.
                  </p>
                </div>
                <div className="relative">
                  <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 text-white rounded-full items-center justify-center font-bold">3</div>
                  <img 
                    src="/images/turnkey.jpg" 
                    alt="Construction Phase" 
                    className="rounded-xl shadow-lg md:ml-8"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 text-white rounded-full items-center justify-center font-bold">4</div>
                  <img 
                    src="/images/turnkey.jpg" 
                    alt="Handover Phase" 
                    className="rounded-xl shadow-lg md:mr-8"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4 md:pl-12">
                  <div className="md:hidden w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
                  <h3 className="text-2xl font-bold">Finalization & Handover</h3>
                  <p className="text-gray-700">
                    After thorough quality inspections and final touches, we hand over your fully-functional space. 
                    We provide comprehensive documentation and training, along with post-handover support to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center space-y-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold">Ready to Start Your Turnkey Project?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Let's create something extraordinary together. Schedule a consultation to discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
           
           <Link to="/portfolio">
           
            <motion.button 
              className="flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl shadow-lg hover:bg-green-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio <ArrowRight size={18} />
            </motion.button>
           </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default TurnkeySpace;
