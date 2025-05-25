import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import ReservationSection from './components/ReservationSection';
import SpecialsSection from './components/SpecialsSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'La Vie En Rose | Fine French Café & Pâtisserie';
    
    // Set custom font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Update the CSS variables for the fonts
    document.documentElement.style.setProperty('--font-serif', '"Playfair Display", serif');
    document.documentElement.style.setProperty('--font-sans', '"Source Sans 3", sans-serif');
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-sans" style={{ fontFamily: 'var(--font-sans)' }}>
      <style>{`
        h1, h2, h3, h4, h5, h6, .font-serif {
          font-family: var(--font-serif);
        }
      `}</style>
      
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <SpecialsSection />
        <AboutSection />
        <GallerySection />
        <ReservationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;