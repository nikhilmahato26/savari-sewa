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
    <div className="font-poppins bg-[#F8F9FB] text-[#112240]">
      <Navbar />
      <Hero />
      <PopularRoutes />
      <Services />
      <WhyUs />
      <WeCare />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
