import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { scheduleData } from '../data/schedule';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Contact Us" 
          subtitle="We'd love to hear from you. Visit us, give us a call, or send us a message"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-secondary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                  Plot 32 , second floor, sainikpuri<br /> 
                  Telangana 500094, India<br />
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-secondary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-secondary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@lavieenrose.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-secondary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-1">
                    {scheduleData.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="font-medium w-24">{item.day}</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <Button variant="primary" className="w-full sm:w-auto">Send Message</Button>
                </div>
              </form>
            </div>
            
            {/* Map (iframe embed) */}
            <div className="rounded-lg overflow-hidden shadow-md h-72">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7610.973480134456!2d78.5525165!3d17.4842634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b489ee765ff%3A0x785428899b6dfafb!2sLa%20Vie%20En%20Rose%20Cafe!5e0!3m2!1sen!2sau!4v1747390061240!5m2!1sen!2sau" width="100%" height="100%" style={{ border: 0 }}  
              allowFullScreen={true}  loading="lazy"
              title="Map location of La Vie En Rose"
              ></iframe>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;