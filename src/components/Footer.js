import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Emergency Dental Care',
    'General Dentistry',
    'Cosmetic Dentistry', 
    'Teeth Whitening',
    'Root Canals',
    'Dental Implants',
    'Oral Surgery',
    'Family Dentistry'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Emergency Care', href: 'tel:+13178545309' },
    { label: 'Patient Reviews', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Same Day Dental</h3>
                <p className="text-sm text-gray-400">Emergency & General Care</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional dental care with same-day emergency services. 
              Your oral health is our priority.
            </p>

            {/* Rating Display */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="text-gray-400 text-lg">★</span>
                </div>
                <span className="text-white font-bold">4.1</span>
              </div>
              <p className="text-gray-400 text-sm">Based on 2,742 Google Reviews</p>
            </div>

            {/* Emergency Alert */}
            <div className="bg-red-900/50 border border-red-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-400">🚨</span>
                <span className="text-red-400 font-semibold">Dental Emergency?</span>
              </div>
              <a 
                href="tel:+13178545309"
                className="text-white font-bold hover:text-red-300 transition-colors"
              >
                Call (317) 854-5309
              </a>
              <p className="text-red-300 text-xs mt-1">Available 24/7</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="text-primary-400 group-hover:text-primary-300 transition-colors">▸</span>
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="text-primary-400 group-hover:text-primary-300 transition-colors">▸</span>
                      <span>{link.label}</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="text-primary-400 group-hover:text-primary-300 transition-colors">▸</span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📍</span>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    7225 US-31<br />
                    Indianapolis, IN
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📞</span>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a 
                    href="tel:+13178545309"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    (317) 854-5309
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">🕒</span>
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p>Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links / Actions */}
            <div className="mt-8 space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('booking')}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                📅 Book Appointment
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=7225+US-31,+Indianapolis,+IN', '_blank')}
                className="w-full border border-primary-500 text-primary-400 py-3 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200"
              >
                🧭 Get Directions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Insurance & Payment */}
      <div className="bg-gray-800/50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-bold text-white mb-4">Insurance & Payment Options</h3>
            <p className="text-gray-300 mb-4">We accept most major insurance plans and offer flexible payment options</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <span>• Most Insurance Plans</span>
              <span>• Flexible Payment Plans</span>
              <span>• CareCredit Financing</span>
              <span>• Emergency Payment Options</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Same Day Dental. All rights reserved. | 7225 US-31, Indianapolis, IN
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary-400 transition-colors"
              >
                HIPAA Compliance
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 left-6 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
        viewport={{ once: true }}
      >
        <span className="text-xl">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;