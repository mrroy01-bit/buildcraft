import {Link} from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Home, Building2, Hotel } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../Header';

const InteriorDesign = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div 
        className="relative py-20 bg-green-50" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Transforming Spaces, <span className="text-green-600">Elevating Experiences</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From concept to completion, we craft extraordinary interior spaces that reflect your unique vision. 
              Our award-winning designs blend functionality, aesthetics, and sustainability across residential, 
              commercial, and hospitality sectors.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Star size={18} className="text-yellow-500" />
                <span>Award-winning designs</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle size={18} className="text-green-500" />
                <span>End-to-end solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle size={18} className="text-green-500" />
                <span>Sustainable practices</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Service Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <Home size={36} className="text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Residential</h3>
            <p className="text-gray-600 mb-4">
              Thoughtfully designed living spaces that reflect your personality and lifestyle.
            </p>
            <a href="#residential" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <Building2 size={36} className="text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Commercial</h3>
            <p className="text-gray-600 mb-4">
              Functional workspaces that enhance productivity and communicate your brand values.
            </p>
            <a href="#commercial" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <Hotel size={36} className="text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Hospitality</h3>
            <p className="text-gray-600 mb-4">
              Memorable environments that delight guests and maximize operational efficiency.
            </p>
            <a href="#hospitality" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Residential Interiors */}
        <motion.div 
          id="residential"
          className="grid md:grid-cols-2 gap-12 items-center" 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Home size={24} className="text-green-600" />
              <h2 className="text-3xl font-bold">Residential Interiors</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your home should be your sanctuary. We specialize in creating living spaces that 
              perfectly balance aesthetics with functionality, reflecting your unique personality 
              and lifestyle needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Custom furniture designs tailored to your space and style preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Thoughtful space planning that maximizes flow and functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Curated material and finish selections that create a cohesive aesthetic</span>
              </li>
            </ul>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-4 bg-green-600/10 rounded-3xl -z-10"></div>
            <img
              src="/images/residential.jpg"
              alt="Luxury Residential Interior Design"
              className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500" fill="currentColor" />
                <Star size={16} className="text-yellow-500" fill="currentColor" />
                <Star size={16} className="text-yellow-500" fill="currentColor" />
                <Star size={16} className="text-yellow-500" fill="currentColor" />
                <Star size={16} className="text-yellow-500" fill="currentColor" />
              </div>
              <p className="text-sm font-medium">Award-winning design</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Commercial Interiors */}
        <motion.div 
          id="commercial"
          className="grid md:grid-cols-2 gap-12 items-center" 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="relative order-2 md:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-4 bg-green-600/10 rounded-3xl -z-10"></div>
            <img
              src="/images/commercial.jpg"
              alt="Modern Commercial Office Design"
              className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-medium text-green-600">Productivity-focused design</p>
            </div>
          </motion.div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="flex items-center gap-2">
              <Building2 size={24} className="text-green-600" />
              <h2 className="text-3xl font-bold">Commercial Interiors</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your workspace should inspire productivity while communicating your brand's essence. 
              We create commercial environments that balance functionality, employee wellbeing, 
              and strategic business objectives.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Strategic space planning that enhances workflow and collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Brand-aligned design elements that reinforce company culture and values</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Ergonomic solutions that prioritize employee comfort and wellbeing</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Hospitality Interiors */}
        <motion.div 
          id="hospitality"
          className="grid md:grid-cols-2 gap-12 items-center" 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Hotel size={24} className="text-green-600" />
              <h2 className="text-3xl font-bold">Hospitality Interiors</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create unforgettable guest experiences through thoughtfully designed environments. 
              Our hospitality designs balance aesthetic appeal with operational efficiency to 
              deliver spaces that delight guests and optimize business performance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Immersive environments that create memorable guest experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Durable, high-performance materials that withstand heavy usage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Operational efficiency integrated seamlessly with aesthetic excellence</span>
              </li>
            </ul>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-4 bg-green-600/10 rounded-3xl -z-10"></div>
            <img
              src="/images/hospitality.jpg"
              alt="Luxury Hotel Lobby Design"
              className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-medium text-green-600">Experience-driven design</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="bg-green-50 rounded-3xl p-10 space-y-10"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to ensure every project exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your needs, preferences, and vision through detailed consultations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Concept</h3>
              <p className="text-gray-600">We develop design concepts that align with your objectives and aesthetic preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">We refine the selected concept into detailed plans and specifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-600">We oversee implementation to ensure the final result matches our shared vision.</p>
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

export default InteriorDesign;
