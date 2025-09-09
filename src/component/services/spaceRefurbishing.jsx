import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, RefreshCw, Palette, Briefcase, Layout, Target, Clock } from 'lucide-react';
import Header from '../Header';

const SpaceRefurbishing = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    whileInView: { opacity: 1, y: 0 }
  };

  // Benefits data
  const benefits = [
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Minimal Disruption",
      description: "We work around your schedule to minimize business interruption during refurbishment."
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Tailored Solutions",
      description: "Custom refurbishment plans designed specifically for your business needs and goals."
    },
    {
      icon: <Layout className="text-green-600" size={24} />,
      title: "Space Optimization",
      description: "Maximize every square foot of your workspace with intelligent space planning."
    },
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      title: "Business Continuity",
      description: "Our phased approach ensures your business operations continue throughout the project."
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
                Space <span className="text-green-600">Refurbishing</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Transform your existing space into something extraordinary without the cost and disruption 
                of a complete rebuild. Our expert refurbishment services breathe new life into tired environments.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <RefreshCw size={18} className="text-green-500" />
                  <span>Fast-track refurbishment</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Minimal business disruption</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-green-100 rounded-3xl -z-10 transform rotate-2"></div>
              <img
                src="/images/refurbish1.jpg"
                alt="Office Refurbishing"
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
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Revitalize Your Space</h2>
            <p className="text-lg text-gray-700">
              As specialists in office interiors, we deliver fast-track refurbishment services that transform 
              your space while ensuring minimal disruption to your daily operations. From simple refreshes to 
              comprehensive space reconfigurations, our expert team brings your vision to life.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Areas */}
        <div className="space-y-24">
          {/* Workspace Management */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Layout size={20} />
                </div>
                <h2 className="text-3xl font-bold">Workspace Management</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help businesses transform their workspaces without disruptive structural changes. Our expert 
                designers create innovative layouts that optimize your existing space for modern work needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Smart partitioning that creates dedicated zones while maintaining open flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Thoughtful designs for meeting areas, focus spaces, and collaborative zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Ergonomic solutions that enhance productivity and employee wellbeing</span>
                </li>
              </ul>
              {/* <motion.button 
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowRight size={16} />
              // </motion.button> */}
            </div>
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-2 bg-green-600/10 rounded-3xl -z-10"></div>
              <img
                src="/images/refurbish1.jpg"
                alt="Workspace Management"
                className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-green-600">Smart space division</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Incorporating Brand Image */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden order-2 md:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-2 bg-green-600/10 rounded-3xl -z-10"></div>
              <img
                src="/images/refurbish2.jpg"
                alt="Brand Integration"
                className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-green-600">Brand-aligned spaces</p>
              </div>
            </motion.div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Palette size={20} />
                </div>
                <h2 className="text-3xl font-bold">Incorporating Brand Image</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Modern workspaces should embody your brand identity in every element. We create immersive brand 
                experiences that resonate with your team and impress your visitors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Strategic brand integration throughout your environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Custom design elements that reflect your company culture and values</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Cohesive visual identity that strengthens brand recognition</span>
                </li>
              </ul>
              {/* <motion.button 
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Portfolio <ArrowRight size={16} />
              </motion.button> */}
            </div>
          </motion.div>

          {/* Dilapidations and Extensive Re-Fitting */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <RefreshCw size={20} />
                </div>
                <h2 className="text-3xl font-bold">Comprehensive Re-Fitting</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                When your space needs a complete overhaul, our comprehensive refitting services transform outdated 
                environments into inspiring, functional workplaces with minimal disruption to your operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Full-service refurbishment including flooring, ceilings, lighting, and finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Phased implementation approaches that minimize business disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>End-to-end project management with clear communication and timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Expert handling of building regulations and compliance requirements</span>
                </li>
              </ul>
              {/* <motion.button 
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services <ArrowRight size={16} />
              </motion.button> */}
            </div>
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-2 bg-green-600/10 rounded-3xl -z-10"></div>
              <img
                src="/images/refurbish2.jpg"
                alt="Comprehensive Refitting"
                className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-green-600">Complete transformation</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div 
          className="bg-green-50 rounded-3xl p-10 space-y-10"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Refurbishment Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A structured approach that delivers exceptional results with minimal disruption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your current space, understand your needs, and identify opportunities for improvement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">Our designers create detailed plans tailored to your specific goals, brand, and budget.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the refurbishment with careful phasing to minimize disruption to your operations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Handover</h3>
              <p className="text-gray-600">We complete final inspections and provide all documentation and support for your refurbished space.</p>
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
          <h2 className="text-3xl font-bold">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Let's breathe new life into your workspace with our expert refurbishment services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/portfolio">
            
              <motion.button 
                className="flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl shadow-lg hover:bg-green-50 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              View Past Projects <ArrowRight size={18} />
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default SpaceRefurbishing;
