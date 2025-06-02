import React, { useState } from 'react';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuItems';
import SectionTitle from './ui/SectionTitle';

const MenuSection: React.FC = () => {
  const categories = ['all', 'breakfast', 'lunch', 'desserts', 'coffee'];
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="menu" className="py-20 bg-[#F4C2C2]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Menu" 
          subtitle="Crafted with passion and the finest ingredients, our menu offers a delightful culinary journey"
        />
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors capitalize ${
                activeCategory === category 
                  ? 'bg-[#B76E79] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <p className="text-center text-gray-700 text-lg col-span-full">
              No items available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-gray-800">{item.name}</h3>
          <span className="font-medium text-[#B76E79]">{item.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        {item.popular && (
          <span className="inline-block bg-[#D4AF37]/20 text-[#B76E79] text-sm font-medium px-3 py-1 rounded-full">
            Popular Choice
          </span>
        )}
      </div> 
    </div>
  );
};

export default MenuSection;
