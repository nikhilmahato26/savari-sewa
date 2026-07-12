import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ShieldCheck, Clock } from 'lucide-react';
import heroCar from '../../assets/hero-car.png';

// Import local generated images for the slider background
import puriTemple from '../../assets/puri_temple.png';
import konarkTemple from '../../assets/konark_temple.png';
import cuttackBridge from '../../assets/cuttack_bridge.png';
import airportTransfer from '../../assets/airport_transfer.png';

// Custom WhatsApp SVG
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Hero = () => {
  const whatsappNumber = "918280090216";
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: puriTemple,
      tagline: "Clean Cars. Professional Drivers. On-time Service.",
      routeText: "Puri"
    },
    {
      id: 1,
      image: konarkTemple,
      tagline: "Explore the Sun Temple & Golden Beaches with local experts.",
      routeText: "Konark"
    },
    {
      id: 2,
      image: cuttackBridge,
      tagline: "Smooth intercity commutes and reliable business trips.",
      routeText: "Cuttack"
    },
    {
      id: 3,
      image: airportTransfer,
      tagline: "Hassle-free 24/7 airport pickups and drops guaranteed.",
      routeText: "Airport"
    }
  ];

  // Autoplay Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleInquiry = () => {
    const slide = slides[currentSlide];
    const text = encodeURIComponent(`Hi Savari Sewa, I want to make an inquiry for booking a cab for the ${slide.routeText} route/trip.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleBookNow = () => {
    const slide = slides[currentSlide];
    const text = encodeURIComponent(`Hi Savari Sewa, I want to book a cab for the ${slide.routeText} trip. Please check availability.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative bg-[#F8F9FB] pt-20 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container Card */}
        <div className="bg-[#05132D] rounded-b-[40px] md:rounded-b-[50px] relative overflow-hidden shadow-2xl px-6 py-12 md:p-16 lg:py-20 lg:px-20 text-white min-h-[500px] lg:min-h-[580px] flex items-center">
          
          {/* Animated Background Slider Image Layer */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 0.25, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                className="absolute inset-0 bg-cover bg-center"
              />
            </AnimatePresence>
            
            {/* Deep color gradients overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#05132D] via-[#05132D]/95 to-[#040E22]/90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          </div>
          
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headings & Buttons */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-montserrat font-extrabold leading-tight text-white"
                >
                  Premium Cab Service<br/>Across <span className="text-[#FDBA12]">Odisha</span>
                </motion.h1>
                
                {/* Dynamically changing tagline per slide */}
                <div className="min-h-[48px]">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-300 font-medium text-sm md:text-base tracking-wide max-w-lg leading-relaxed"
                    >
                      {slides[currentSlide].tagline}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {/* Inquiry button */}
                <button
                  onClick={handleInquiry}
                  className="flex items-center space-x-2 border-2 border-[#FDBA12] text-[#FDBA12] hover:bg-[#FDBA12]/10 transition-all px-5 py-3 rounded-xl font-bold text-sm"
                >
                  <Calendar size={18} />
                  <span>Inquiry</span>
                </button>

                {/* WhatsApp booking button */}
                <button
                  onClick={handleBookNow}
                  className="flex items-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all px-5 py-3 rounded-xl font-bold text-sm"
                >
                  <WhatsAppIcon className="text-white" />
                  <span>WhatsApp for Booking</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: White Toyota Innova Crysta Image (stays fixed in foreground) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-full max-w-[450px] lg:max-w-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
              >
                <img 
                  src={heroCar} 
                  alt="White Innova Crysta" 
                  className="w-full h-auto object-contain select-none"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800";
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom Dot Slider Navigation */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2.5 z-20">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(slide.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === slide.id ? 'bg-[#FDBA12] scale-110' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${slide.id + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Features Card Overlapping Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Feature 1 */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
              <div className="bg-amber-50 p-3.5 rounded-full flex items-center justify-center">
                <Tag size={26} className="text-[#FDBA12]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#082A63] font-montserrat">
                  Affordable Prices
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Best fares with no hidden charges
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
              <div className="bg-emerald-50 p-3.5 rounded-full flex items-center justify-center">
                <ShieldCheck size={26} className="text-emerald-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#082A63] font-montserrat">
                  Drivers Verified
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Background verified & experienced drivers
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
              <div className="bg-sky-50 p-3.5 rounded-full flex items-center justify-center">
                <Clock size={26} className="text-sky-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#082A63] font-montserrat">
                  On-time Services
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Punctual pick-ups and hassle-free travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
