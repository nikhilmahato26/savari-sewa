import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Do you provide airport pickup?',
      answer: 'Yes, we provide 24x7 airport pickup and drop-off services at Biju Patnaik International Airport, Bhubaneswar, with meet & greet options.'
    },
    {
      question: 'Can I customize my route?',
      answer: 'Absolutely! Our "Customised Booking" allows you to plan your own itinerary across Odisha. You choose the destinations, and we handle the driving.'
    },
    {
      question: 'Do you provide interstate travel?',
      answer: 'Yes, we do provide outstation and interstate travel services. Please contact our support team to get a detailed quote for your specific route.'
    },
    {
      question: 'Can I book for multiple days?',
      answer: 'Yes, our Day Booking service is perfect for multi-day sightseeing and tours. We can arrange suitable accommodation for our drivers during outstation trips.'
    },
    {
      question: 'Are your drivers verified?',
      answer: 'Yes, all our drivers undergo rigorous background checks, are professionally trained, and have years of experience driving on Odisha routes.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major payment methods including UPI, Credit/Debit Cards, Net Banking, and Cash.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary mb-4 font-montserrat"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-primary font-montserrat pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-secondary transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
