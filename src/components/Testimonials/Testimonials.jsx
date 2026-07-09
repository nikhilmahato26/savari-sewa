import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rakesh Sharma',
      text: 'Excellent service! The driver was very polite and the car was extremely clean. We took a trip from Bhubaneswar to Puri and it was very comfortable. Highly recommend Savari Sewa.',
      rating: 5,
      date: '2 days ago'
    },
    {
      name: 'Priya Dash',
      text: 'Booked a custom tour for my family across Odisha. The route planning was perfect and there were no hidden charges. The best cab service in Odisha by far.',
      rating: 5,
      date: '1 week ago'
    },
    {
      name: 'Amit Patel',
      text: 'Used their airport pickup service. The driver was waiting with a placard before I even landed. Very professional and the Innova was in pristine condition.',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Sneha Gupta',
      text: 'Very safe for solo female travelers. The GPS tracking feature gave my family peace of mind. Thank you for the wonderful service!',
      rating: 5,
      date: '1 month ago'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary mb-4 font-montserrat"
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="pb-16"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-bg-light p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="flex text-secondary mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-light italic flex-grow mb-6">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                    <div>
                      <h4 className="font-bold text-primary">{review.name}</h4>
                      <p className="text-xs text-gray-500">Google Review</p>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
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

export default Testimonials;
