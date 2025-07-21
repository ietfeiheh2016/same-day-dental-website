import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🚨",
      title: "Emergency Dental Care",
      description: "Immediate relief for dental emergencies. No appointment needed - walk-ins welcome 24/7.",
      features: ["Severe toothache relief", "Broken tooth repair", "Lost filling replacement", "Abscess treatment"],
      price: "From $89",
      popular: true,
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 2,
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and routine checkups.",
      features: ["Professional cleaning", "Cavity fillings", "Oral exams", "X-rays"],
      price: "From $149",
      popular: false,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      icon: "✨",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures and whitening treatments.",
      features: ["Teeth whitening", "Veneers", "Bonding", "Smile makeover"],
      price: "From $299",
      popular: false,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: "🔧",
      title: "Restorative Care",
      description: "Repair and restore damaged teeth with crowns, bridges, and implants.",
      features: ["Dental crowns", "Bridges", "Implants", "Dentures"],
      price: "From $599",
      popular: false,
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 5,
      icon: "👨‍👩‍👧‍👦",
      title: "Family Dentistry",
      description: "Gentle dental care for patients of all ages in a comfortable, family-friendly environment.",
      features: ["Pediatric care", "Adult treatments", "Senior services", "Preventive care"],
      price: "From $99",
      popular: false,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      icon: "🦴",
      title: "Oral Surgery",
      description: "Advanced surgical procedures including extractions and wisdom tooth removal.",
      features: ["Tooth extraction", "Wisdom teeth", "Oral surgery", "Sedation options"],
      price: "From $199",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care with same-day appointments available. 
            From emergency treatments to cosmetic procedures, we've got you covered.
          </p>
          
          {/* Service Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { number: "24/7", label: "Emergency Care" },
              { number: "2,742+", label: "Happy Patients" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    🔥 MOST POPULAR
                  </motion.div>
                </div>
              )}

              {/* Service Card */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold">{service.price}</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Book Appointment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Emergency Dental Care?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Don't wait - call us now for immediate assistance. We're available 24/7 for dental emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13178545309"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Call (317) 854-5309</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                Book Online
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;