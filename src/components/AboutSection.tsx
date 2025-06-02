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
            <div className="space-y-4 text-gray-700 ">
            <p className="text-md">
              Since 2010, La Vie En Rose has brought Parisian café charm to the city with handcrafted pastries and timeless French flavors—blending tradition, elegance, and passion in every bite.
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
