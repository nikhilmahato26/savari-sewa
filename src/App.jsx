import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import PopularRoutes from './components/PopularRoutes/PopularRoutes';
import WhyUs from './components/WhyUs/WhyUs';
import Fleet from './components/Fleet/Fleet';
import TourPackages from './components/TourPackages/TourPackages';
import WeCare from './components/WeCare/WeCare';
import Statistics from './components/Statistics/Statistics';
import Testimonials from './components/Testimonials/Testimonials';
import BookingProcess from './components/BookingProcess/BookingProcess';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="font-poppins bg-bg-light text-text-dark">
      <Navbar />
      <Hero />
      <Services />
      <PopularRoutes />
      <WhyUs />
      <Fleet />
      <TourPackages />
      <WeCare />
      <Statistics />
      <Testimonials />
      <BookingProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
