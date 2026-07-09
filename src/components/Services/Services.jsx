import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarRange, Map, PlaneTakeoff } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Hourly Booking',
      description: 'Travel at your own pace within the city. Flexible hourly rentals for meetings or shopping.',
      icon: Clock,
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Day Booking',
      description: 'Perfect for full day sightseeing and local tours. Explore without any rush.',
      icon: CalendarRange,
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Custom Booking',
      description: "Plan your own route across Odisha. You choose the destinations, we'll handle the rest.",
      icon: Map,
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Airport Pick-Up',
      description: 'On-time airport pick-up & drop with warm welcome assurance. 24x7 service.',
      icon: PlaneTakeoff,
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Our Main Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            Premium Travel Solutions
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_20px_50px_rgba(8,42,99,0.1)] transition-all group"
            >
              <div className="w-16 h-16 bg-bg-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="text-primary group-hover:text-secondary transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
