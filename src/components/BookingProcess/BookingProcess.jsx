import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, CheckCircle2, UserCircle, Smile } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    { title: 'Choose Destination', icon: MapPin },
    { title: 'Choose Vehicle', icon: Car },
    { title: 'Confirm Booking', icon: CheckCircle2 },
    { title: 'Driver Assigned', icon: UserCircle },
    { title: 'Enjoy Journey', icon: Smile },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-montserrat mb-4 text-white"
          >
            Simple Booking Process
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center relative z-10 mb-8 md:mb-0 group"
              >
                <div className="w-20 h-20 bg-primary border-4 border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-xl shadow-black/20">
                  <step.icon size={32} />
                </div>
                <h3 className="font-bold font-montserrat text-center md:w-32">{step.title}</h3>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block w-full flex-1">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
                    className="h-0.5 bg-secondary origin-left"
                  ></motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
