import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const ReservationSection: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation submitted! We will contact you shortly to confirm.');
  };

  // Generate date range (tomorrow to one week from today)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const oneWeekFromNow = new Date(today);
  oneWeekFromNow.setDate(today.getDate() + 7);

  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const oneWeekStr = oneWeekFromNow.toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-20 bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        className="absolute inset-0 opacity-20 bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Reserve a Table"
          subtitle="Make your dining experience seamless by booking in advance"
          className="text-white"
        />

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-white text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/70"
                min={tomorrowStr}
                max={oneWeekStr}
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-white text-sm font-medium mb-2">Time</label>
              <select
                id="time"
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="" disabled>Select a time</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-white text-sm font-medium mb-2">Guests</label>
              <select
                id="guests"
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="large">More than 8 people</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/70"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/70"
                placeholder="(123) 456-7890"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Special Requests */}
            <div className="md:col-span-2">
              <label htmlFor="special-requests" className="block text-white text-sm font-medium mb-2">Special Requests</label>
              <textarea
                id="special-requests"
                rows={4}
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/70 resize-none"
                placeholder="Any special requests or dietary restrictions?"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                type="submit"
              >
                Book Reservation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
