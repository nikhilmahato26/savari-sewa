import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PopularRoutes from './components/PopularRoutes/PopularRoutes';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import WeCare from './components/WeCare/WeCare';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Home, Grid, Briefcase, Headphones, User } from 'lucide-react';

function App() {
  const whatsappNumber = "918280090216";

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-poppins bg-[#F8F9FB] text-[#112240] pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <PopularRoutes />
      <Services />
      <WhyUs />
      <WeCare />
      <Contact />
      <Footer />

      {/* Floating Bottom Navigation Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 py-2 px-4 flex justify-around items-center shadow-[0_-4px_16px_rgba(0,0,0,0.06)] md:hidden">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center space-y-1 flex-1 text-secondary"
        >
          <Home size={20} strokeWidth={2.5} />
          <span className="text-[10px] font-bold tracking-wide">Home</span>
        </button>
        
        <button 
          onClick={() => handleNavClick('services')}
          className="flex flex-col items-center justify-center space-y-1 flex-1 text-gray-400 active:text-secondary"
        >
          <Grid size={20} />
          <span className="text-[10px] font-medium tracking-wide">Services</span>
        </button>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Savari%20Sewa,%20I%20want%20to%20view%20my%20trips.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 flex-1 text-gray-400 active:text-secondary"
        >
          <Briefcase size={20} />
          <span className="text-[10px] font-medium tracking-wide">My Trips</span>
        </a>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Savari%20Sewa,%20I%20need%20support%20for%20a%20booking.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 flex-1 text-gray-400 active:text-secondary"
        >
          <Headphones size={20} />
          <span className="text-[10px] font-medium tracking-wide">Support</span>
        </a>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Savari%20Sewa,%20I%20want%20to%20view%20my%20profile.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 flex-1 text-gray-400 active:text-secondary"
        >
          <User size={20} />
          <span className="text-[10px] font-medium tracking-wide">Profile</span>
        </a>
      </div>
    </div>
  );
}

export default App;
