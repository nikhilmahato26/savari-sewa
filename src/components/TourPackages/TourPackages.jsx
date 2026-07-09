import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sunrise, Heart, Trees, Briefcase, Compass, Users } from 'lucide-react';

const TourPackages = () => {
  const packages = [
    { title: 'Temple Tour', icon: Sunrise, bg: 'bg-orange-100', text: 'text-orange-600' },
    { title: 'Beach Tour', icon: Compass, bg: 'bg-blue-100', text: 'text-blue-600' },
    { title: 'Wildlife Tour', icon: Trees, bg: 'bg-green-100', text: 'text-green-600' },
    { title: 'Family Tour', icon: Users, bg: 'bg-purple-100', text: 'text-purple-600' },
    { title: 'Honeymoon Tour', icon: Heart, bg: 'bg-red-100', text: 'text-red-600' },
    { title: 'Photography Tour', icon: Camera, bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { title: 'Corporate Tour', icon: Briefcase, bg: 'bg-gray-200', text: 'text-gray-700' },
    { title: 'Customized Tour', icon: Compass, bg: 'bg-secondary/20', text: 'text-primary' },
  ];

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Curated Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            Odisha Tour Packages
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-bg-light rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 mx-auto ${pkg.bg} ${pkg.text} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <pkg.icon size={28} />
              </div>
              <h3 className="font-bold font-montserrat text-text-dark group-hover:text-primary transition-colors">
                {pkg.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
