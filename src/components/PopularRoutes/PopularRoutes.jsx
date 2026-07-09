import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, IndianRupee } from 'lucide-react';

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      title: 'Bhubaneswar to Puri to Konark & Return',
      image: 'https://holaciti.com/assets/Articles/1750123118_azKMDcON7G.webp', // Temple placeholder
      price: '3500',
    },
    {
      id: 2,
      title: 'Bhubaneswar to Konark to Puri & Return',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-qCdL3SEXDKKpQyaP0GtBZJ3V2PPOLmITed45wluZoqjm3wk1olnOdlk&s=10', // Sun Temple placeholder
      price: '3500', // Assuming same price
    },
    {
      id: 3,
      title: 'Bhubaneswar to Chilika & Return',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVM2TTHxmoQcXZoM47sq00KHPfgDwdCDkQEPRcIwMw_8m23O9WWzSflf5D&s=10', // Lake/Boat placeholder
      price: '3000',
    },
    {
      id: 4,
      title: 'Customise Your Trip Across Odisha',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-jagannath-temple-puri-odisha-2-city-hero?qlt=82&ts=1726663809131', // Nature placeholder
      price: 'Varies',
      isCustom: true,
      tags: ['Heritage', 'Temples', 'Beaches', 'Wildlife', 'Waterfalls']
    },
  ];

  const rates = [
    { route: 'Bhubaneswar to Puri to Konark', price: '3500' },
    { route: 'Bhubaneswar to Puri', price: '2500' },
    { route: 'Bhubaneswar to Chilika Lake', price: '3000' },
    { route: 'Bhubaneswar to Cuttack', price: '1600' },
  ];

  return (
    <section id="routes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Popular Routes Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-primary mb-4"
            >
              Popular Routes
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-light rounded-3xl overflow-hidden border border-gray-100 shadow-lg group hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-montserrat">
                    {index + 1}
                  </div>
                  {!route.isCustom && (
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold shadow-md flex items-center">
                      <IndianRupee size={14} className="mr-1" />
                      {route.price}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4 font-montserrat min-h-[56px]">
                    {route.title}
                  </h3>
                  
                  {route.isCustom ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {route.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-4">
                      <MapPin size={20} className="text-gray-400" />
                      <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 relative">
                         <Navigation size={16} className="text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <MapPin size={20} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estimated Rates & Custom Journey Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Estimated Rates Table */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-primary rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center">
              Estimated Rates <span className="text-sm font-normal text-gray-300 ml-2">(With Return)</span>
            </h3>
            
            <div className="space-y-4 relative z-10">
              {rates.map((rate, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-sm md:text-base font-light">{rate.route}</span>
                  </div>
                  <div className="bg-secondary text-primary px-3 py-1 rounded-md font-bold text-sm flex items-center">
                    <IndianRupee size={14} className="mr-1" />
                    {rate.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-6 italic">
              *Rates are approximate and may vary based on vehicle type & season.
            </p>
          </motion.div>

          {/* Custom Journey Banner */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-gold rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="bg-primary p-4 rounded-full text-secondary flex-shrink-0">
                <MapPin size={48} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold font-montserrat text-primary mb-3">
                  Customize Your Journey
                </h3>
                <p className="text-lg text-primary/80 font-medium mb-6">
                  We create personalized itineraries across Odisha's most beautiful destinations.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {['Temple', 'Heritage', 'Beach', 'Wildlife', 'Culture'].map(icon => (
                    <div key={icon} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-2">
                        {/* Placeholder for actual SVGs, using Lucide for now */}
                        <Navigation size={20} className="text-primary" />
                      </div>
                      <span className="text-xs font-bold text-primary">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;
