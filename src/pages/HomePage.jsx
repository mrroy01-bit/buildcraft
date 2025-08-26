import React from 'react';
import Hero from '../component/Hero';
import Services from '../component/Services';
import About from '../component/About';
import ViewWork from '../component/ViewWork';
import ContactForm from '../component/ContactForm';
import Header from '../component/Header';
import Footer from '../component/Footer';

const HomePage = () => {
  return (
    <>
    <Header />
      <Hero />
      <Services />
      <About />
      <ViewWork />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
