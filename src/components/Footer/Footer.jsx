import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#051a3f] text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex flex-col mb-6">
              <span className="text-2xl font-montserrat font-extrabold text-white">
                SAVARI SEWA
              </span>
              <span className="text-xs font-poppins italic text-secondary">
                Har Savari Sewa Humari
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium cab rental and tour services in Odisha. We provide safe, comfortable, and reliable transportation for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-xs font-bold">
                X
              </a>
            </div>
          </div>


          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+918280090216" className="text-gray-400 hover:text-secondary transition-colors text-sm">+91 82800 90216</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:booking@savarisewa.in" className="text-gray-400 hover:text-secondary transition-colors text-sm">booking@savarisewa.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Savari Sewa. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
