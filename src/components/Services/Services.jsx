import React from 'react';
import { motion } from 'framer-motion';
import { Check, Compass, MapPin, Plane } from 'lucide-react';

// Import local generated images
import puriTemple from '../../assets/puri_temple.png';
import konarkTemple from '../../assets/konark_temple.png';
import airportTransfer from '../../assets/airport_transfer.png';

// Custom WhatsApp SVG
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Services = () => {
  const whatsappNumber = "918280090216";

  const servicesData = [
    {
      id: 1,
      title: 'Outstation',
      subtitle: 'Travel beyond the city with comfort.',
      image: puriTemple,
      icon: Compass,
      iconBg: 'bg-indigo-50 text-[#082A63]',
      bullets: [
        'Long distance trips across Odisha',
        'Clean cars & professional drivers',
        'Transparent pricing'
      ]
    },
    {
      id: 2,
      title: 'Local',
      subtitle: 'Perfect for local travel & city rides.',
      image: konarkTemple,
      icon: MapPin,
      iconBg: 'bg-amber-50 text-amber-500',
      bullets: [
        'City tours, sightseeing & more',
        'Flexible hours & km packages',
        'Safe, reliable & on-time'
      ]
    },
    {
      id: 3,
      title: 'Airport Transfer',
      subtitle: 'Hassle-free airport pick & drop.',
      image: airportTransfer,
      icon: Plane,
      iconBg: 'bg-emerald-50 text-emerald-500',
      bullets: [
        'On-time airport pickups & drops',
        'Flight tracking for timely service',
        'Comfortable & safe rides'
      ]
    }
  ];

  const handleBookService = (serviceTitle) => {
    const text = encodeURIComponent(`Hi Savari Sewa, I would like to book a cab for ${serviceTitle} service. Please provide rates.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className="w-8 h-0.5 bg-[#FDBA12]"></span>
          <h2 className="text-xl md:text-2xl font-montserrat font-extrabold text-[#082A63]">
            Our Services
          </h2>
          <span className="w-8 h-0.5 bg-[#FDBA12]"></span>
        </div>

        {/* Vertical Stack of Service Cards */}
        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F9FB] border border-gray-100 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row hover:shadow-md transition-shadow"
            >
              {/* Left Column: Image */}
              <div className="lg:w-2/5 relative min-h-[220px] lg:min-h-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Right Column: Details & Booking */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
                
                {/* Header: Icon, Title & Subtitle */}
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl ${service.iconBg} flex-shrink-0`}>
                    <service.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-[#082A63] font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Part: Bullets & Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-gray-100/50">
                  {/* Bullet points */}
                  <ul className="space-y-2 text-left">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-sm text-gray-700 font-semibold">
                        <span className="w-5 h-5 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking Button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleBookService(service.title)}
                      className="bg-[#05132D] hover:bg-[#0A224A] text-white font-bold py-3.5 px-6 rounded-2xl flex items-center space-x-2 transition-all text-xs md:text-sm active:scale-95 shadow-sm"
                    >
                      <WhatsAppIcon className="text-white" />
                      <span>Book on WhatsApp</span>
                      <span className="font-light text-white/50 text-[10px] pl-1 font-mono">&gt;</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
