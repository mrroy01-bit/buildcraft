import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ZoomIn } from 'lucide-react';
import Header from './Header';
const ViewWork = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Define project categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'architecture', label: 'Architecture' },
  ];

  // Define projects with their images
  const projects = [
    {
      id: 1,
      title: 'Modern Villa Design',
      category: 'residential',
      location: 'Noida, UP',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Luxury villa with contemporary design elements and sustainable features.',
    },
    {
      id: 2,
      title: 'Corporate Office Interior',
      category: 'commercial',
      location: 'Lucknow, UP',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Modern office space designed for productivity and collaboration.',
    },
    {
      id: 3,
      title: 'Luxury Apartment Interior',
      category: 'interior',
      location: 'Varanasi, UP',
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'High-end interior design with premium materials and custom furniture.',
    },
    {
      id: 4,
      title: 'City Commercial Complex',
      category: 'architecture',
      location: 'Noida, UP',
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Mixed-use commercial complex with innovative architectural elements.',
    },
    {
      id: 5,
      title: 'Smart Home Design',
      category: 'residential',
      location: 'Lucknow, UP',
      imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Technology-integrated home with sleek, minimalist design.',
    },
    {
      id: 6,
      title: 'Restaurant Renovation',
      category: 'commercial',
      location: 'Varanasi, UP',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Complete renovation of dining space with custom-designed elements.',
    },
    {
      id: 7,
      title: 'Modern Kitchen Design',
      category: 'interior',
      location: 'Noida, UP',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Contemporary kitchen with premium appliances and custom cabinetry.',
    },
    {
      id: 8,
      title: 'Urban Residential Tower',
      category: 'architecture',
      location: 'Lucknow, UP',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Iconic residential tower with sustainable design principles.',
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Handle image preview
  const openImagePreview = (project) => {
    setSelectedImage(project);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Header />
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-800 to-transparent opacity-30"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-full mb-3">
            Our Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of completed projects across residential, commercial, and interior design categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                    <div className="flex mt-3 gap-2">
                      <button 
                        onClick={() => openImagePreview(project)}
                        className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
                      >
                        <ZoomIn size={18} className="text-white" />
                      </button>
                      <button className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 p-2 rounded-full transition-all duration-300">
                        <ExternalLink size={18} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-orange-500 mb-1">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </div>
                  <h3 className="text-white text-lg font-bold truncate">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImagePreview}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden bg-gray-900 rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImagePreview}
              className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 relative">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6 bg-gray-900">
                <div className="text-xs font-medium uppercase tracking-wider text-orange-500 mb-2">
                  {categories.find(cat => cat.id === selectedImage.category)?.label}
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{selectedImage.location}</span>
                </div>
                <p className="text-gray-300 mb-6">{selectedImage.description}</p>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default ViewWork;
