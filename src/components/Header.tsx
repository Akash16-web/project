import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
            <img
              src="https://ugc.production.linktr.ee/OznCkkdvRkWuFQBEygF2_BL6rKj7RsxnwxqWC?io=true&size=avatar-v3_0"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <span 
              className={`font-serif italic text-xl md:text-2xl font-bold ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              La Vie En Rose
            </span>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'menu', 'about', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium capitalize transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {item}
              </button>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('reservation')}
            >
              Reserve a Table
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X 
                size={24} 
                className={isScrolled ? 'text-primary' : 'text-white'} 
              />
            ) : (
              <MenuIcon 
                size={24} 
                className={isScrolled ? 'text-primary' : 'text-white'} 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="py-4 px-6 space-y-4">
            {['home', 'menu', 'about', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 font-medium capitalize text-gray-700 hover:text-primary"
              >
                {item}
              </button>
            ))}
            <Button 
              variant="primary" 
              className="w-full mt-4"
              onClick={() => scrollToSection('reservation')}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;