import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Car, Shield, Phone, Star } from 'lucide-react';


// Custom WhatsApp SVG
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center bg-[#070b14]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair leading-tight mb-4">
                Premium <span className="text-secondary italic">Car Rental</span><br/>
                & Cab Services
              </h1>
              <p className="text-gray-300 font-medium mb-6 text-sm md:text-base tracking-wide flex flex-wrap items-center gap-2">
                Chauffeur Driven <span className="text-secondary">•</span> Outstation & Local <span className="text-secondary">•</span> 24/7 Availability
              </p>
              <p className="text-gray-400 font-light max-w-lg leading-relaxed text-base md:text-lg mb-6">
                Experience world-class, premium, and luxury car rentals across Odisha. Travel to Bhubaneswar, Puri, Konark, and beyond in the absolute comfort of our top-tier SUVs and sedans.
              </p>

              {/* Popular Routes */}
              <div className="space-y-2">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Popular Routes</span>
                <div className="flex flex-wrap gap-2 max-w-md">
                  {['Bbsr - Puri - Konark', 'Bbsr - Konark - Puri', 'Bbsr to Cuttack', 'Bbsr to Chilika'].map((route, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-300">
                      {route}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#routes" className="bg-secondary text-primary px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all text-center">
                Book Ride
              </a>
              <a href="https://wa.me/919938136659" target="_blank" rel="noreferrer" className="bg-transparent border border-gray-600 hover:border-secondary text-white px-8 py-3.5 rounded-full font-medium text-lg transition-all flex items-center justify-center space-x-2 group">
                <span className="group-hover:text-secondary transition-colors"><WhatsAppIcon /></span>
                <span className="group-hover:text-secondary transition-colors">WhatsApp</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={16} />
              <span className="text-sm">+91 9938136659</span>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 max-w-xl">
              <div className="bg-[#151a25]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors">
                <Clock className="text-secondary mb-2" size={24} strokeWidth={1.5} />
                <span className="text-white font-semibold text-sm md:text-base">24/7</span>
                <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">Available</span>
              </div>
              <div className="bg-[#151a25]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors">
                <Car className="text-secondary mb-2" size={24} strokeWidth={1.5} />
                <span className="text-white font-semibold text-sm md:text-base">Luxury Fleet</span>
                <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">SUVs & Sedans</span>
              </div>
              <div className="bg-[#151a25]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors">
                <Shield className="text-secondary mb-2" size={24} strokeWidth={1.5} />
                <span className="text-white font-semibold text-sm md:text-base">Chauffeurs</span>
                <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">Safe & Reliable</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-[500px] ml-auto aspect-square">
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-jagannath-temple-puri-odisha-2-city-hero?qlt=82&ts=1726663809131" 
                  alt="Jagannath Temple" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Top Left Badge */}
              <div className="absolute top-8 -left-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-r-2xl rounded-l-lg p-4 shadow-lg pr-6 pl-4 z-20">
                <div className="flex space-x-1 text-secondary mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h4 className="text-white font-bold text-sm">Trusted Services</h4>
                <p className="text-gray-300 text-xs font-light">Rated 5.0 By Clients</p>
              </div>

              {/* Bottom Right Badge */}
              <div className="absolute bottom-12 -right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-l-2xl rounded-r-lg p-4 shadow-xl pl-6 pr-4 z-20">
                <h4 className="text-secondary font-playfair font-bold text-2xl tracking-wide">₹12/km</h4>
                <p className="text-gray-300 text-xs font-light tracking-wider text-right">Starting Price</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
