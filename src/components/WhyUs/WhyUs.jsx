import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Coffee, IndianRupee, Sparkles, UserCheck, 
  MapPin, PhoneCall, Zap, Shield, Car, Heart, Users
} from 'lucide-react';

const WhyUs = () => {
  const differentiators = [
    { title: 'Smart Timing & Traffic Planning', desc: 'We plan the best routes to save your time and ensure a smooth journey.', icon: Clock },
    { title: 'Personalised Food & Stop Planning', desc: 'Customized restaurant suggestions based on your preference.', icon: Coffee },
    { title: 'No Hidden Charges', desc: 'Transparent pricing. What we say, is what you pay.', icon: IndianRupee },
    { title: 'Premium Clean & Hygiene', desc: 'Cars are completely clean, sanitised and well-maintained.', icon: Sparkles },
    { title: 'Drivers in Uniform', desc: 'Professional, well-trained, polite and experienced drivers.', icon: UserCheck },
    { title: 'GPS Enabled Vehicles', desc: 'Track rides for enhanced safety.', icon: MapPin },
    { title: '24×7 Support', desc: 'Always available for your assistance.', icon: PhoneCall },
    { title: 'Instant Booking', desc: 'Easy online and WhatsApp booking.', icon: Zap },
  ];

  const features = [
    { title: 'Experienced Drivers', icon: UserCheck },
    { title: 'Luxury Cars', icon: Car },
    { title: 'Safe Travel', icon: Shield },
    { title: 'Family Friendly', icon: Heart },
    { title: 'Customer First', icon: Users },
    { title: 'Air Conditioned', icon: Zap },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bg-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Why Savari Sewa Different */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-2 block"
          >
            Our Strengths
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            Why Savari Sewa is Different From Others
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-16"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {differentiators.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-bg-light p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 transition-colors group"
              >
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-montserrat text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Icons */}
        <div className="bg-primary rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10">
             <div className="text-center mb-12">
               <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">Why Choose Us</h3>
               <p className="text-gray-300">Experience the best in class service with our premium fleet and professional team.</p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-center group cursor-default"
                  >
                    <feature.icon className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <span className="text-white font-medium text-sm">{feature.title}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
