import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        {/* Image */}
        <a href="https://ibb.co/whJLxFF9" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/chbv7SSG/pic.jpg" alt="pic" border="0" className="mx-auto mb-6 rounded-lg shadow-lg" />
        </a>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Experience the Finest Coffee <span className="text-[#D4AF37]">& Cuisine</span>
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Where every cup tells a story and every meal creates a memory
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="outline" 
            className="text-white hover:bg-white/20 active:bg-white/30"
            size="lg"
            onClick={() => scrollToSection('menu')}
          >
            Explore Our Menu
          </Button>
          <Button 
            variant='outline'
            size="lg"
            onClick={() => scrollToSection('reservation')}
            className="text-white hover:bg-white/20 active:bg-white/30"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection('menu')}
          className="text-white"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
