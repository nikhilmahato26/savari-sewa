import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import PopularRoutes from './components/PopularRoutes/PopularRoutes';
import Destinations from './components/Destinations/Destinations';
import WhyUs from './components/WhyUs/WhyUs';
import Fleet from './components/Fleet/Fleet';
import TourPackages from './components/TourPackages/TourPackages';
import WeCare from './components/WeCare/WeCare';
import Statistics from './components/Statistics/Statistics';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Gallery from './components/Gallery/Gallery';
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
      <Destinations />
      <WhyUs />
      <Fleet />
      <TourPackages />
      <WeCare />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Gallery />
      <BookingProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
