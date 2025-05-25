import React from 'react';
import SectionTitle from './ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4C2C2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cafe interior with barista" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-lg hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24  bg-secondary rounded-lg hidden md:block"></div>
          </div>
          
          {/* About content */}
          <div>
            <SectionTitle 
              title="Our Story" 
              centered={false}
            />
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2010, La Vie En Rose began as a small pâtisserie in the local farmers' market. Our founder, Marie Laurent, had a vision to create a space where authentic French café culture could flourish.
              </p>
              <p>
                As our reputation for exquisite pastries and elegant atmosphere grew, we expanded to our current location in the heart of downtown. Today, we're proud to be a beloved destination for those seeking a taste of Paris.
              </p>
              <p>
                At La Vie En Rose, we believe in preserving traditional French baking techniques while embracing modern innovations. Every pastry we create and every cup we serve is crafted with passion and authenticity.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-light rounded-lg">
                  <h3 className="font-serif text-3xl font-bold text-primary">15+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-light rounded-lg">
                  <h3 className="font-serif text-3xl font-bold text-primary">30+</h3>
                  <p className="text-gray-600">Menu Items</p>
                </div>
                <div className="text-center p-4 bg-light rounded-lg">
                  <h3 className="font-serif text-3xl font-bold text-primary">5000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
              
              <div className="pt-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;