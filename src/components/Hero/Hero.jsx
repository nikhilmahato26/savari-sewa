import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Clock, Crown, Car, User, MapPin, Plane, RefreshCcw, ShieldCheck, Landmark } from 'lucide-react';

// Pixel-perfect Mobile WhatsApp SVG
const CustomWhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path fill="#25D366" d="M12.004 0C5.373 0 .004 5.37.004 12.001c0 2.115.553 4.184 1.597 6.004L.004 24l6.146-1.61c1.782.973 3.791 1.488 5.854 1.488h.005c6.628 0 12.005-5.37 12.005-12.002 0-3.212-1.251-6.233-3.522-8.505A11.947 11.947 0 0012.004 0z" />
    <path fill="#FFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#05132D" className="mx-2" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Hero = () => {
  const whatsappNumber = "918280090216";
  const desktopBgImage = "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783924499/ChatGPT_Image_Jul_13_2026_12_03_59_PM_f0safz.png";
  const mobileBgImage = "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783928815/ChatGPT_Image_Jul_13_2026_01_16_28_PM_xmm0dp.png";

  const handleBookNow = () => {
    const text = encodeURIComponent(`Hi Savari Sewa, I want to book a cab. Please check availability.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ============================================================ */}
      {/* MOBILE LAYOUT (Properly scaled for standard phone viewports) */}
      {/* ============================================================ */}
      <div className="md:hidden relative w-full mt-[55px] flex flex-col bg-black">
        <div className="relative w-full aspect-[853/1844] flex flex-col overflow-hidden">
          
          {/* Mobile Background Image - Using an img tag to ensure perfect proportional scaling without cropping */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat"
              style={{ backgroundImage: `url(${mobileBgImage})` }}
            />
          </div>
          
          {/* Mobile Content Container */}
          <div className="relative z-10 flex-1 flex flex-col w-full h-full">
            
            {/* Top Text Section */}
            <div className="px-5 pt-8">
              <div className="flex flex-col items-start">
                <Crown className="text-[#FDBA12] w-5 h-5 mb-1.5 ml-8" fill="currentColor" strokeWidth={1} />
                
                <div className="flex items-center mb-2">
                  <span className="w-4 h-[1.5px] bg-[#05132D] mr-2"></span>
                  <p className="text-[#05132D] font-bold text-[10px] uppercase tracking-wide">
                    Your Journey, Our Priority
                  </p>
                </div>
                
                <h1 className="text-4xl sm:text-[40px] font-extrabold font-montserrat leading-[1.05] tracking-tight text-[#05132D]">
                  Odisha <br/>
                  <span className="text-[#FDBA12]">Luxury Rides</span>
                </h1>
                
                <div className="flex items-center w-[120px] my-3">
                  <span className="flex-1 h-[1px] bg-[#05132D]"></span>
                  <StarIcon />
                  <span className="flex-1 h-[1px] bg-[#05132D]"></span>
                </div>
                
                <p className="text-[#05132D] font-extrabold text-[15px] leading-[1.3]">
                  Comfortable Rides.<br/>Every Time.
                </p>
              </div>
            </div>

            {/* Middle Left SINGLE Glassmorphism Card (Floating over the car, properly scaled) */}
            <div className="bg-[#05132D]/85 backdrop-blur-md rounded-[24px] p-4 flex flex-col space-y-4 w-[150px] shadow-2xl border border-white/10 mt-5 ml-5">
              
              {/* Item 1 */}
              <div className="flex items-center">
                <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-[2px] border-[#FDBA12] shrink-0 shadow-inner">
                   <Car className="text-[#05132D] w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="ml-3 flex flex-col items-start pt-0.5">
                  <p className="text-white text-[11px] font-medium leading-tight tracking-wide mb-1">Clean Cars</p>
                  <div className="h-[1.5px] bg-[#FDBA12] w-[30px]"></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center">
                <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-[2px] border-[#FDBA12] shrink-0 shadow-inner">
                   <User className="text-[#05132D] w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="ml-3 flex flex-col items-start pt-0.5">
                  <p className="text-white text-[11px] font-medium leading-[1.1] tracking-wide mb-1">Expert<br/>Drivers</p>
                  <div className="h-[1.5px] bg-[#FDBA12] w-[30px]"></div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center">
                <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-[2px] border-[#FDBA12] shrink-0 shadow-inner">
                   <Clock className="text-[#05132D] w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="ml-3 flex flex-col items-start pt-0.5">
                  <p className="text-white text-[11px] font-medium leading-[1.1] tracking-wide mb-1">On Time<br/>Always</p>
                  <div className="h-[1.5px] bg-[#FDBA12] w-[30px]"></div>
                </div>
              </div>

            </div>

            {/* Flexible space to push bottom elements down and reveal the ENTIRE car below the card */}
            <div className="flex-1 min-h-[40px]"></div>

            {/* Bottom Dark Panel (Correctly scaled) */}
            <div className="bg-[#05132D] rounded-t-[24px] px-5 pt-5 pb-6 w-full mt-auto border-t-2 border-[#FDBA12] shadow-[0_-8px_20px_rgba(0,0,0,0.25)]">
              
              {/* Icons Row */}
              <div className="flex justify-between items-start mb-6 px-1">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center bg-transparent">
                    <Landmark className="text-white w-5 h-5 stroke-[1]" />
                  </div>
                  <span className="text-white text-[9px] font-light tracking-wider">Outstation</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center bg-transparent">
                    <MapPin className="text-white w-5 h-5 stroke-[1]" />
                  </div>
                  <span className="text-white text-[9px] font-light tracking-wider">Local</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center bg-transparent">
                    <Plane className="text-white w-5 h-5 stroke-[1]" />
                  </div>
                  <span className="text-white text-[9px] font-light tracking-wider">Airport</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center bg-transparent">
                    <RefreshCcw className="text-white w-5 h-5 stroke-[1]" />
                  </div>
                  <span className="text-white text-[9px] font-light tracking-wider">Round Trip</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button 
                onClick={handleBookNow}
                className="w-full bg-[#FDBA12] text-[#05132D] rounded-full py-3 flex items-center justify-center font-bold text-[15px] mb-4 shadow-xl active:scale-95 transition-transform"
              >
                <CustomWhatsAppIcon className="w-5 h-5 mr-2" />
                <span>Book on WhatsApp</span>
              </button>

              {/* Footer Text */}
              <div className="flex items-center justify-center space-x-1.5">
                <ShieldCheck className="text-[#FDBA12] w-4 h-4 stroke-[1.5]" />
                <span className="text-gray-300 text-[10px] font-light tracking-wide">Safe. Reliable. Hassle-Free.</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (Matching mobile visual identity) */}
      {/* ============================================================ */}
      <div className="hidden md:block w-full mt-[55px]">
        <div className="relative w-full min-h-[600px] lg:h-[700px] flex flex-col bg-white overflow-hidden">
          
          {/* Desktop Background Image */}
          <div className="absolute inset-0 z-0">
             <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${desktopBgImage})` }}
            />
            {/* Very subtle light overlay to ensure dark text stays highly readable against any cloud variations */}
            <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none"></div> 
          </div>
          
          {/* Content overlay */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            
            <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 pt-16 lg:pt-20 flex-1">
              {/* Top Text Section */}
              <div className="flex flex-col items-start max-w-2xl">
                <Crown className="text-[#FDBA12] w-7 h-7 mb-2 ml-10" fill="currentColor" strokeWidth={1} />
                
                <div className="flex items-center mb-3">
                  <span className="w-6 h-[2px] bg-[#05132D] mr-3"></span>
                  <p className="text-[#05132D] font-extrabold text-sm uppercase tracking-widest">
                    Your Journey, Our Priority
                  </p>
                </div>
                
                <h1 className="text-6xl lg:text-[72px] font-extrabold font-montserrat leading-[1.05] tracking-tight text-[#05132D]">
                  Odisha <br/>
                  <span className="text-[#FDBA12]">Luxury Rides</span>
                </h1>
                
                <div className="flex items-center w-[200px] my-6">
                  <span className="flex-1 h-[1.5px] bg-[#05132D]"></span>
                  <StarIcon />
                  <span className="flex-1 h-[1.5px] bg-[#05132D]"></span>
                </div>
                
                <p className="text-[#05132D] font-extrabold text-2xl leading-[1.3] mb-12">
                  Comfortable Rides. Every Time.
                </p>

                {/* Horizontal SINGLE Glassmorphism Card for Desktop */}
                <div className="bg-[#05132D]/85 backdrop-blur-md rounded-full px-8 py-5 flex items-center space-x-10 shadow-2xl border border-white/10 w-max">
                  
                  {/* Item 1 */}
                  <div className="flex items-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-[2.5px] border-[#FDBA12] shrink-0 shadow-inner">
                       <Car className="text-[#05132D] w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="ml-4 flex flex-col items-start pt-0.5">
                      <p className="text-white text-[15px] font-medium leading-tight tracking-wide mb-1">Clean Cars</p>
                      <div className="h-[2px] bg-[#FDBA12] w-[35px]"></div>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex items-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-[2.5px] border-[#FDBA12] shrink-0 shadow-inner">
                       <User className="text-[#05132D] w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="ml-4 flex flex-col items-start pt-0.5">
                      <p className="text-white text-[15px] font-medium leading-[1.1] tracking-wide mb-1">Expert Drivers</p>
                      <div className="h-[2px] bg-[#FDBA12] w-[35px]"></div>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex items-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-[2.5px] border-[#FDBA12] shrink-0 shadow-inner">
                       <Clock className="text-[#05132D] w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="ml-4 flex flex-col items-start pt-0.5">
                      <p className="text-white text-[15px] font-medium leading-[1.1] tracking-wide mb-1">On Time Always</p>
                      <div className="h-[2px] bg-[#FDBA12] w-[35px]"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Dark Panel for Desktop */}
            <div className="bg-[#05132D] w-full border-t-[4px] border-[#FDBA12] shadow-[0_-8px_30px_rgba(0,0,0,0.2)] mt-12">
              <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
                
                <div className="flex items-center space-x-6 lg:space-x-10">
                   <div className="flex items-center space-x-2">
                    <ShieldCheck className="text-[#FDBA12] w-6 h-6 stroke-[2]" />
                    <span className="text-gray-200 text-[15px] font-medium tracking-wide">Safe. Reliable. Hassle-Free.</span>
                  </div>
                  
                  <div className="w-[1.5px] h-10 bg-white/20"></div>
                  
                  {/* Icons Row */}
                  <div className="flex items-center space-x-6 lg:space-x-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-[46px] h-[46px] rounded-full border border-white/30 flex items-center justify-center bg-transparent">
                        <Landmark className="text-white w-5 h-5 stroke-[1.2]" />
                      </div>
                      <span className="text-white text-[13px] font-medium tracking-wide">Outstation</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-[46px] h-[46px] rounded-full border border-white/30 flex items-center justify-center bg-transparent">
                        <MapPin className="text-white w-5 h-5 stroke-[1.2]" />
                      </div>
                      <span className="text-white text-[13px] font-medium tracking-wide">Local</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-[46px] h-[46px] rounded-full border border-white/30 flex items-center justify-center bg-transparent">
                        <Plane className="text-white w-5 h-5 stroke-[1.2]" />
                      </div>
                      <span className="text-white text-[13px] font-medium tracking-wide">Airport</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-[46px] h-[46px] rounded-full border border-white/30 flex items-center justify-center bg-transparent">
                        <RefreshCcw className="text-white w-5 h-5 stroke-[1.2]" />
                      </div>
                      <span className="text-white text-[13px] font-medium tracking-wide">Round Trip</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button 
                  onClick={handleBookNow}
                  className="bg-[#FDBA12] text-[#05132D] rounded-full px-8 py-3.5 flex items-center justify-center font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                >
                  <CustomWhatsAppIcon className="w-6 h-6 mr-3" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
