import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              About Same Day Dental
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located at 7225 US-31, we've been serving the Indianapolis community with 
              exceptional dental care. Our modern facility combines cutting-edge technology 
              with compassionate care to ensure every patient receives the best treatment possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "🏥", title: "Modern Facility", desc: "State-of-the-art equipment" },
                { icon: "👨‍⚕️", title: "Expert Team", desc: "Experienced professionals" },
                { icon: "⏰", title: "Flexible Hours", desc: "Evening & weekend availability" },
                { icon: "💳", title: "Insurance", desc: "Most plans accepted" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Schedule Your Visit
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <span className="text-6xl">🦷</span>
                <h3 className="text-2xl font-bold text-gray-800 mt-4">Why Choose Us?</h3>
              </div>

              <div className="space-y-6">
                {[
                  { number: "15+", label: "Years Experience", color: "text-blue-600" },
                  { number: "2,742+", label: "Satisfied Patients", color: "text-green-600" },
                  { number: "4.1⭐", label: "Google Rating", color: "text-yellow-600" },
                  { number: "24/7", label: "Emergency Care", color: "text-red-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm"
                  >
                    <span className="text-gray-700 font-medium">{stat.label}</span>
                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.number}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;