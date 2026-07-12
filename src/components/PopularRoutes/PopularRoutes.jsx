import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

// Import local generated images
import puriTemple from '../../assets/puri_temple.png';
import konarkTemple from '../../assets/konark_temple.png';
import cuttackBridge from '../../assets/cuttack_bridge.png';
import airportTransfer from '../../assets/airport_transfer.png';

const PopularRoutes = () => {
  const whatsappNumber = "918280090216";

  const routes = [
    {
      id: 1,
      title: 'Bhubaneswar ↔ Puri',
      image: puriTemple,
      distance: '60 km',
      duration: '1.5 hrs',
    },
    {
      id: 2,
      title: 'Bhubaneswar ↔ Konark',
      image: konarkTemple,
      distance: '65 km',
      duration: '1.5 hrs',
    },
    {
      id: 3,
      title: 'Bhubaneswar ↔ Cuttack',
      image: cuttackBridge,
      distance: '30 km',
      duration: '1 hr',
    },
    {
      id: 4,
      title: 'Airport Transfer',
      image: airportTransfer,
      distance: '3 km',
      duration: '15 min',
    },
  ];

  const handleBookRoute = (routeTitle) => {
    const text = encodeURIComponent(`Hi Savari Sewa, I want to book the route: ${routeTitle}. Please share rates and car options.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleBookAll = () => {
    const text = encodeURIComponent(`Hi Savari Sewa, I want to check rates for popular return routes.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="routes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-montserrat font-extrabold text-[#082A63]">
            Popular Return Routes
          </h2>
          <button 
            onClick={handleBookAll}
            className="flex items-center space-x-1 text-[#082A63] hover:text-[#FDBA12] font-bold text-sm md:text-base transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={16} className="text-[#FDBA12] stroke-[3]" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-[#082A63] font-montserrat">
                    {route.title}
                  </h3>
                  
                  {/* Distance & Time */}
                  <div className="flex items-center space-x-6 text-gray-500">
                    <div className="flex items-center space-x-1.5">
                      <MapPin size={15} className="text-gray-400" />
                      <span className="text-xs font-semibold">{route.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock size={15} className="text-gray-400" />
                      <span className="text-xs font-semibold">{route.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual quick WhatsApp button */}
              <div className="px-5 pb-5">
                <button
                  onClick={() => handleBookRoute(route.title)}
                  className="w-full text-center py-2 border border-[#082A63]/10 hover:border-[#082A63] rounded-xl text-xs font-bold text-[#082A63] hover:bg-[#082A63]/5 transition-all"
                >
                  Quick Inquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width Book on WhatsApp button */}
        <div className="w-full">
          <button
            onClick={handleBookAll}
            className="w-full bg-[#E2F8EE] hover:bg-[#D3F5E3] text-[#0F9D58] border border-[#C5F2DB] font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-all text-sm md:text-base shadow-sm active:scale-[0.99]"
          >
            {/* Custom Green WhatsApp SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Book on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;
