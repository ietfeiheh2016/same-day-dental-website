import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Same Day Emergency Dental Care",
      subtitle: "No Appointment Needed - Walk-ins Welcome",
      description: "Get immediate relief from dental pain with our emergency services. Open 7 days a week for your urgent dental needs.",
      cta: "Get Emergency Care",
      bg: "from-red-500 to-red-700"
    },
    {
      title: "Transform Your Smile Today",
      subtitle: "Professional Cosmetic Dentistry",
      description: "Achieve the perfect smile with our advanced cosmetic procedures. Same-day treatments available.",
      cta: "Book Consultation",
      bg: "from-primary-500 to-secondary-500"
    },
    {
      title: "Gentle Family Dentistry",
      subtitle: "Caring for All Ages",
      description: "Comprehensive dental care for the whole family in a comfortable, modern environment.",
      cta: "Schedule Visit",
      bg: "from-green-500 to-green-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg}`}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-20 h-20 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-yellow-400 text-sm">☆</span>
                </div>
                <span className="ml-2 text-sm font-medium">4.1 Rating • 2,742 Reviews</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-4 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.h2
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl lg:text-2xl mb-6 text-white/90 font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg mb-8 text-white/80 max-w-lg leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBooking}
                  className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>{slides[currentSlide].cta}</span>
                  <span className="text-xl">→</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+13178545309"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </motion.a>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-12 grid grid-cols-2 gap-6"
              >
                {[
                  { icon: "🚨", text: "24/7 Emergency" },
                  { icon: "⚡", text: "Same Day Service" },
                  { icon: "💎", text: "Modern Equipment" },
                  { icon: "❤️", text: "Gentle Care" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
                >
                  {/* Placeholder for dental image */}
                  <div className="aspect-square bg-white/30 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl">🦷</span>
                  </div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">2,742+</div>
                      <div className="text-sm text-gray-600">Happy Patients</div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4.1⭐</div>
                      <div className="text-sm text-gray-600">Google Rating</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;