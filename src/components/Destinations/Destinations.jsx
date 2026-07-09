import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      name: 'Bhubaneswar',
      image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/ver2/XIwvQlc61t8ZIpanz4mAnjU5yiPgMTsF1FomAJaW47thYQ/Aerial-cityscape-of-Bhubaneswar-Odisha-showing-cost-of-living-in-Bhubaneswar_0_1200.jpg',
      places: ['Lingaraj Temple', 'Mukteswar Temple', 'Dhauli', 'Nandankanan Zoo']
    },
    {
      name: 'Puri',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPTvxDzdGTOdCiGaiYRa0ySQadPTWHFa2bWisfQTGowLA17fObKXHt7I&s=10',
      places: ['Jagannath Temple', 'Golden Beach', 'Local Market', 'Sea Food']
    },
    {
      name: 'Konark',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg',
      places: ['Sun Temple', 'Museum', 'Beach']
    },
    {
      name: 'Chilika',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVM2TTHxmoQcXZoM47sq00KHPfgDwdCDkQEPRcIwMw_8m23O9WWzSflf5D&s=10',
      places: ['Lake', 'Boating', 'Bird Watching', 'Dolphins']
    },
    {
      name: 'Cuttack',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45vvztHiUOubf49x8iQ3976hPCbvGoA6RL89pSFfQMGklpF6s0x_CZ4Y7&s=10',
      places: ['Barabati Fort', 'Netaji Museum', 'Silver Filigree Market']
    }
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Explore
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            Top Destinations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg ${index === 3 || index === 4 ? 'lg:col-span-1' : ''} ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500 z-10"></div>
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/50 to-transparent">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold font-montserrat text-white mb-2 flex items-center">
                    <MapPin className="text-secondary mr-2" size={24} />
                    {dest.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <ul className="text-gray-200 font-light space-y-1 mt-4">
                      {dest.places.map(place => (
                        <li key={place} className="flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary before:rounded-full before:mr-2">
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
