import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1627896157734-4d7d42ea3b25?q=80&w=800&auto=format&fit=crop', alt: 'Puri Jagannath Temple', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop', alt: 'Luxury Car Fleet', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1610045437815-581335b7190c?q=80&w=800&auto=format&fit=crop', alt: 'Konark Sun Temple', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop', alt: 'Chilika Lake Boating', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop', alt: 'Odisha Heritage', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop', alt: 'Road Trip in SUV', size: 'medium' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Memories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4 font-montserrat"
          >
            Our Gallery
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => {
            let colSpan = 'col-span-1';
            let rowSpan = 'row-span-1';
            
            if (img.size === 'large') {
              colSpan = 'md:col-span-2';
              rowSpan = 'row-span-2';
            } else if (img.size === 'medium') {
              rowSpan = 'row-span-2';
            }

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colSpan} ${rowSpan} rounded-2xl overflow-hidden relative group`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-montserrat font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
