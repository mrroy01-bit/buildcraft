import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Services from './component/Services';
import About from './component/About';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
function App() {
  return (
  <>
  <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  </>
  );
}

export default App;
