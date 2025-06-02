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
      style={{ 
        backgroundImage: 'url(https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/683782/restaurant020220611045541.jpg)'
      }}
    >
      {/* Overlay to reduce opacity of background image */}
      <div className="absolute inset-0 bg-black opacity-35 pointer-events-none" aria-hidden="true"></div>

      {/* Visually hidden alt text for background image */}
      <span className="sr-only"></span>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        <h1
          className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 text-transparent bg-clip-text"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Experience the Finest Coffee <span className="text-pink-300">& Cuisine</span>
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
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10">
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
