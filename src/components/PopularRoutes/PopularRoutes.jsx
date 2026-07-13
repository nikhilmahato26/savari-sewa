import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

// Import local generated images
import puriTemple from '../../assets/puri_temple.png';
import konarkTemple from '../../assets/konark_temple.png';
import cuttackBridge from '../../assets/cuttack_bridge.png';
import airportTransfer from '../../assets/airport_transfer.png';

// Pixel-perfect WhatsApp SVG
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} width="20" height="20">
    <path fill="#25D366" d="M12.004 0C5.373 0 .004 5.37.004 12.001c0 2.115.553 4.184 1.597 6.004L.004 24l6.146-1.61c1.782.973 3.791 1.488 5.854 1.488h.005c6.628 0 12.005-5.37 12.005-12.002 0-3.212-1.251-6.233-3.522-8.505A11.947 11.947 0 0012.004 0z" />
    <path fill="#FFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

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
                  className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#FDBA12] hover:bg-[#E2A60F] rounded-xl text-xs font-bold text-[#05132D] transition-all shadow-sm active:scale-95"
                >
                  <WhatsAppIcon className="" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        

      </div>
    </section>
  );
};

export default PopularRoutes;
