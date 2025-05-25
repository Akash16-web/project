import React from 'react';
import { Clock } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const SpecialsSection: React.FC = () => {
  const specials = [
    {
      id: 1,
      title: 'Breakfast Deal',
      description: 'Enjoy any breakfast item with a coffee of your choice',
      price: '199/-',
      time: 'Daily, 7:00 AM - 11:00 AM',
      image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Lunch Special',
      description: 'Any sandwich with a side salad and drink',
      price: '299/-',
      time: 'Weekdays, 11:00 AM - 2:00 PM',
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Weekend Brunch',
      description: 'Bottomless mimosas with any brunch entrée',
      price: '149/-',
      time: 'Weekends, 10:00 AM - 2:00 PM',
      image: 'https://images.pexels.com/photos/209449/pexels-photo-209449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#F5F0E8]" >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Special Offers" 
          subtitle="Take advantage of our limited-time specials and seasonal promotions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special) => (
            <div key={special.id} className="relative group overflow-hidden rounded-lg shadow-lg h-[450px]">
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={special.image} 
                  alt={special.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center mb-2">
                  <Clock size={16} className="text-[#D4AF37] mr-2" />
                  <span className="text-sm">{special.time}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">{special.title}</h3>
                <p className="mb-3 opacity-90">{special.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#D4AF37]">{special.price}</span>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => scrollToSection('reservation')}
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;