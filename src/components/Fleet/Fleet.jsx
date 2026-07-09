import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Users, Briefcase, Snowflake, UserCheck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Fleet = () => {
  const cars = [
    { name: 'Premium Sedan', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop', pax: '4', lug: '2', ac: 'Yes', driver: 'Yes' },
    { name: 'SUV / Ertiga', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop', pax: '6', lug: '3', ac: 'Yes', driver: 'Yes' },
    { name: 'Innova Crysta', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop', pax: '6', lug: '4', ac: 'Yes', driver: 'Yes' },
    { name: 'Luxury Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop', pax: '4', lug: '3', ac: 'Yes', driver: 'Yes' },
    { name: 'Tempo Traveller', image: 'https://images.unsplash.com/photo-1520106208362-e642cb3a6c11?q=80&w=800&auto=format&fit=crop', pax: '12-16', lug: '8', ac: 'Yes', driver: 'Yes' },
  ];

  return (
    <section id="fleet" className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Our Vehicles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            Premium Fleet
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full pb-16 pt-8"
          >
            {cars.map((car, index) => (
              <SwiperSlide key={index} className="w-[300px] md:w-[450px]">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold font-montserrat text-white">{car.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Users size={18} className="text-secondary mr-2" />
                        <span className="text-sm font-medium">{car.pax} Passengers</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={18} className="text-secondary mr-2" />
                        <span className="text-sm font-medium">{car.lug} Luggage</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Snowflake size={18} className="text-secondary mr-2" />
                        <span className="text-sm font-medium">AC: {car.ac}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <UserCheck size={18} className="text-secondary mr-2" />
                        <span className="text-sm font-medium">Driver: {car.driver}</span>
                      </div>
                    </div>
                    <a href="#booking" className="block w-full text-center bg-primary hover:bg-accent-blue text-white font-bold py-3 rounded-xl transition-colors">
                      Book Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
