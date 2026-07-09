import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Snowflake, ShieldCheck, ArrowRight } from 'lucide-react';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState(0);

  const cars = [
    {
      name: 'Innova Crysta',
      tagline: 'The Ultimate Luxury SUV Experience',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop', // White SUV
      pax: '6 + 1',
      lug: '4 Bags',
      ac: 'Tri-Zone AC',
      driver: 'Certified Expert',
      price: '₹18',
      description: 'The Gold Standard of Indian travel. Perfect for long journeys, corporate rentals, and premium family trips across Odisha. Offers unmatched ride quality, legroom, and premium leather seating.'
    },
    {
      name: 'Premium Sedan',
      tagline: 'Comfort & Elegance for Every Journey',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop', // Sedan
      pax: '4 + 1',
      lug: '2 Bags',
      ac: 'Automatic Climate Control',
      driver: 'Verified Chauffeur',
      price: '₹12',
      description: 'Sleek, fuel-efficient, and smooth. Ideal for local corporate meetings, daily commutes, and swift airport transfers. Experience quiet cabins and modern comforts at the best rates.'
    },
    {
      name: 'SUV / Ertiga',
      tagline: 'Spacious Family Rides Made Affordable',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop', // SUV Ertiga
      pax: '6 + 1',
      lug: '3 Bags',
      ac: 'Dual AC Venting',
      driver: 'Expert Hill Driver',
      price: '₹15',
      description: 'A versatile family SUV offering ample seating and cabin space. Perfect for budget-friendly group tours, outstation pilgrim packages, and weekend getaways.'
    },
    {
      name: 'Tempo Traveller',
      tagline: 'Luxury Group Travel Uncompromised',
      image: 'https://images.unsplash.com/photo-1520106208362-e642cb3a6c11?q=80&w=800&auto=format&fit=crop', // Van
      pax: '12 - 16',
      lug: '8+ Bags',
      ac: 'Roof-mounted Blower AC',
      driver: 'Interstate Expert',
      price: '₹24',
      description: 'Travel together in absolute style. Featuring push-back reclining seats, dynamic ambient lighting, and high-fidelity entertainment systems. Perfect for large tour groups, wedding parties, and group excursions.'
    }
  ];

  const handleBookCar = (carName, rate) => {
    const message = `Hi Savari Sewa, I'm interested in booking the *${carName}* (Starting at ${rate}/km). Please provide details and availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919938136659?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="fleet" className="py-28 bg-[#090e1a] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Our Luxury Showroom
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Select Your Premium Ride
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-gray-800 pb-6 max-w-3xl mx-auto">
          {cars.map((car, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all ${
                activeTab === index 
                  ? 'bg-secondary text-primary shadow-lg scale-105' 
                  : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {car.name}
            </button>
          ))}
        </div>

        {/* Dynamic Car Showcase Box */}
        <div className="bg-[#121824]/60 border border-gray-800/80 rounded-[40px] p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              
              {/* Left Column: Specs & Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-secondary font-bold uppercase tracking-wider text-xs block mb-1">
                    {cars[activeTab].tagline}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">
                    {cars[activeTab].name}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                    {cars[activeTab].description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-gray-800/50 p-4 rounded-2xl flex items-center space-x-3">
                    <Users className="text-secondary flex-shrink-0" size={22} />
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1">Capacity</span>
                      <span className="text-sm font-bold text-white">{cars[activeTab].pax} Seats</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-gray-800/50 p-4 rounded-2xl flex items-center space-x-3">
                    <Briefcase className="text-secondary flex-shrink-0" size={22} />
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1">Luggage</span>
                      <span className="text-sm font-bold text-white">{cars[activeTab].lug}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-gray-800/50 p-4 rounded-2xl flex items-center space-x-3">
                    <Snowflake className="text-secondary flex-shrink-0" size={22} />
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1">Climate</span>
                      <span className="text-sm font-bold text-white">{cars[activeTab].ac}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-gray-800/50 p-4 rounded-2xl flex items-center space-x-3">
                    <ShieldCheck className="text-secondary flex-shrink-0" size={22} />
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1">Driver</span>
                      <span className="text-sm font-bold text-white">{cars[activeTab].driver}</span>
                    </div>
                  </div>
                </div>

                {/* Rates & Actions */}
                <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Estimated Rate</span>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold font-playfair text-secondary">{cars[activeTab].price}</span>
                      <span className="text-sm text-gray-400 font-light ml-1">/ km onwards</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBookCar(cars[activeTab].name, cars[activeTab].price)}
                    className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-secondary/20 flex items-center space-x-2 group w-full sm:w-auto justify-center"
                  >
                    <span>Request Booking</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Image Showcase */}
              <div className="lg:col-span-6 flex justify-center items-center relative h-64 md:h-[400px]">
                {/* Backdrop Glow behind car */}
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[100px] pointer-events-none transform scale-75"></div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={cars[activeTab].image}
                    alt={cars[activeTab].name}
                    className="w-full h-full object-cover rounded-3xl border border-gray-800/60 shadow-2xl relative z-10"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute inset-4 border border-white/5 rounded-3xl pointer-events-none z-20"></div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
