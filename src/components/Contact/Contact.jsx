import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary mb-4 font-montserrat"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4"
          ></motion.div>
          <p className="text-gray-600">Ready to explore Odisha? Contact us for bookings and inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold font-montserrat text-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/5 text-primary p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone / WhatsApp</p>
                  <a href="tel:+919937033136" className="text-lg font-bold text-text-dark hover:text-secondary transition-colors">+91 99370 33136</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/5 text-primary p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Address</p>
                  <a href="mailto:booking@savarisewa.in" className="text-lg font-bold text-text-dark hover:text-secondary transition-colors">booking@savarisewa.in</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/5 text-primary p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Office Address</p>
                  <p className="text-lg font-bold text-text-dark">Bhubaneswar, Odisha</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/5 text-primary p-3 rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Working Hours</p>
                  <p className="text-lg font-bold text-text-dark">24x7 Available</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 bg-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-primary text-sm shadow-md">View on Google Maps</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <h3 className="text-2xl font-bold font-montserrat mb-8">Send Us a Message</h3>
            
            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-white placeholder-gray-400 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-white placeholder-gray-400 transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email Address (Optional)</label>
                <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-white placeholder-gray-400 transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-white placeholder-gray-400 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="bg-gradient-gold text-primary font-bold py-4 px-8 rounded-xl w-full hover:shadow-[0_0_20px_rgba(253,186,18,0.4)] transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
