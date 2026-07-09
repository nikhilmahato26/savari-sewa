import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Car, Map, Star, Award, Navigation } from 'lucide-react';

const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentCount = Math.min(Math.floor((progress / (duration * 1000)) * end), end);
        setCount(currentCount);
        if (progress < duration * 1000) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Statistics = () => {
  const stats = [
    { label: 'Happy Customers', value: 15000, suffix: '+', icon: Users },
    { label: 'Trips Completed', value: 30000, suffix: '+', icon: Navigation },
    { label: 'Destinations', value: 50, suffix: '+', icon: Map },
    { label: 'Professional Drivers', value: 100, suffix: '+', icon: Award },
    { label: 'Vehicles', value: 75, suffix: '+', icon: Car },
    { label: 'Rating', value: 4.9, suffix: '★', icon: Star, isFloat: true },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-bg-light to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white shadow-xl rounded-full flex items-center justify-center mb-4 border border-gray-100 text-secondary">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold font-montserrat text-primary mb-2">
                {stat.isFloat ? (
                  <span>{stat.value}{stat.suffix}</span>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
