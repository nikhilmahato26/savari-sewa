import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Itinerary', href: '#packages' },
    { name: 'Places', href: '#routes' },
    { name: 'Pricing', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#070b14]/90 backdrop-blur-md shadow-lg py-3 border-b border-gray-800' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-8 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary text-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-black/20"></div>
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-bold text-white leading-tight">
                  Savari Sewa
                </span>
                <span className="text-[10px] font-poppins text-secondary uppercase tracking-[0.2em] leading-none mt-1">
                  Travels
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919938136659" className="flex items-center space-x-2 border border-gray-600 rounded-full px-5 py-2.5 hover:border-secondary transition-colors text-white">
                <PhoneCall size={16} className="text-gray-400" />
                <span className="text-sm font-medium">+919938136659</span>
              </a>
              <a href="#booking" className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold hover:bg-secondary/90 transition-colors text-sm">
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-secondary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#070b14] border-b border-gray-800 shadow-xl py-4 flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 font-medium hover:text-white transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800 flex flex-col space-y-4">
             <a href="tel:+919938136659" className="flex items-center space-x-2 text-white font-medium border border-gray-600 rounded-full px-4 py-3 justify-center">
                <PhoneCall size={18} className="text-gray-400" />
                <span>+919938136659</span>
              </a>
            <a href="#booking" className="bg-secondary text-center text-primary px-6 py-3 rounded-full font-bold w-full block">
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
