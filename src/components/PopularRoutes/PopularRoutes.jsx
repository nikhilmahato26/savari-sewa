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

  const handleBookRoute = (route) => {
    const message = route.isCustom 
      ? `Hi Savari Sewa, I want to customise a trip across Odisha. Please assist.`
      : `Hi Savari Sewa, I want to book the route: *${route.title}* (Price: ₹${route.price}). Please provide availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919938136659?text=${encodedMessage}`, '_blank');
  };

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
                className="bg-bg-light rounded-3xl overflow-hidden border border-gray-100 shadow-lg group hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
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
                  <div className="p-6 pb-2">
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
                </div>
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleBookRoute(route)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-4 rounded-2xl text-center transition-all mt-4 block text-sm shadow-md hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default PopularRoutes;
