import React, { useState } from 'react';
import { Menu, X, Phone, Home, Grid, Briefcase, Headphones, User } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = "918280090216";

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Hamburger + Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#082A63] hover:text-[#FDBA12] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo "SS" + Text */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-3xl font-playfair font-bold text-[#FDBA12] leading-none tracking-tight">SS</span>
            <div className="flex flex-col">
              <span className="text-lg font-montserrat font-extrabold text-[#082A63] leading-none">
                SAVARI SEWA
              </span>
              <span className="text-[10px] font-poppins text-gray-500 font-medium leading-none mt-0.5">
                Har Savari Sewa Humari
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('routes')} className="text-sm font-semibold text-[#082A63] hover:text-[#FDBA12] transition-colors">Routes</button>
          <button onClick={() => handleNavClick('services')} className="text-sm font-semibold text-[#082A63] hover:text-[#FDBA12] transition-colors">Services</button>
          <button onClick={() => handleNavClick('strengths')} className="text-sm font-semibold text-[#082A63] hover:text-[#FDBA12] transition-colors">Strengths</button>
          <button onClick={() => handleNavClick('contact')} className="text-sm font-semibold text-[#082A63] hover:text-[#FDBA12] transition-colors">Contact</button>
        </nav>

        {/* Right Side: Call Us Button */}
        <div>
          <a 
            href={`tel:+91${whatsappNumber}`} 
            className="flex items-center space-x-1.5 bg-[#FDBA12] text-[#082A63] font-bold px-4 py-2 rounded-full shadow-sm text-sm hover:bg-[#E2A60F] transition-all hover:scale-105 active:scale-95"
          >
            <Phone size={14} className="fill-[#082A63]" />
            <span>Call Us</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4 transition-all">
          <button 
            onClick={() => handleNavClick('routes')} 
            className="text-left text-[#082A63] font-bold hover:text-[#FDBA12] py-2 border-b border-gray-50"
          >
            Popular Routes
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-left text-[#082A63] font-bold hover:text-[#FDBA12] py-2 border-b border-gray-50"
          >
            Our Services
          </button>
          <button 
            onClick={() => handleNavClick('strengths')} 
            className="text-left text-[#082A63] font-bold hover:text-[#FDBA12] py-2 border-b border-gray-50"
          >
            Our Strengths
          </button>
          <button 
            onClick={() => handleNavClick('we-care')} 
            className="text-left text-[#082A63] font-bold hover:text-[#FDBA12] py-2 border-b border-gray-50"
          >
            We Care Like Family
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-left text-[#082A63] font-bold hover:text-[#FDBA12] py-2"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
