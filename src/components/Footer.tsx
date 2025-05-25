import React from 'react';
import { UserRound as Rose, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gold text-gray-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center mb-4">
              <Rose size={32} className="text-secondary mr-2" />
              <span className="font-serif text-xl font-bold">La Vie En Rose</span>
            </div>
            <p className="text-gray-400 mb-6">
              Where French elegance meets culinary excellence in a charming café atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={27} />
              </a>
              <a href="https://www.instagram.com/lavieenrosecafehyderabad?igsh=MTRzcG55dm5rZnVq" 
              className="text-gray-400 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={27} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={27} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'menu', 'about', 'gallery', 'contact', 'reservation'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-dark transition-colors capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Opening hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Wednesday: 7:00 AM - 7:00 PM</li>
              <li>Thursday: 7:00 AM - 8:00 PM</li>
              <li>Friday: 7:00 AM - 9:00 PM</li>
              <li>Saturday: 8:00 AM - 9:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on special events and promotions.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} La Vie En Rose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;