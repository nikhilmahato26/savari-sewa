import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, Newspaper, Wind, Heart, UserCheck, PhoneCall, Baby, HelpingHand, Stethoscope, Users, CarFront } from 'lucide-react';

const WeCare = () => {
  const cares = [
    { title: 'Well Behaved Drivers', icon: UserCheck },
    { title: 'Experienced Drivers', icon: CarFront },
    { title: 'Customer First', icon: Users },
    { title: 'Newspaper', icon: Newspaper },
    { title: 'Complimentary Water', icon: Droplet },
    { title: 'Clean Cars', icon: SparklesIcon },
    { title: 'Fully AC', icon: Wind },
    { title: 'Emergency Support', icon: PhoneCall },
    { title: 'First Aid', icon: Stethoscope },
    { title: 'Child Friendly', icon: Baby },
    { title: 'Senior Citizen Friendly', icon: HelpingHand },
    { title: 'Women Safety', icon: ShieldCheck },
  ];

  function SparklesIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    );
  }

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FDBA12 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair italic mb-4 text-secondary"
          >
            We Care Like Family
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Your safety and comfort are our highest priorities. We go the extra mile to ensure a delightful journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cares.map((care, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-primary text-secondary transition-all border border-white/10">
                <care.icon size={24} />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{care.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeCare;
