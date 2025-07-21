import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    isEmergency: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'Emergency Dental Care',
    'General Dentistry', 
    'Cosmetic Dentistry',
    'Restorative Care',
    'Family Dentistry',
    'Oral Surgery',
    'Teeth Whitening',
    'Dental Cleaning',
    'Root Canal',
    'Tooth Extraction'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS (you'll need to set this up at emailjs.com)
      const templateParams = {
        to_email: 'samedaydental@example.com', // Replace with actual clinic email
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message,
        is_emergency: formData.isEmergency ? 'YES - URGENT' : 'No',
        clinic_name: 'Same Day Dental',
        clinic_phone: '(317) 854-5309',
        clinic_address: '7225 US-31, Indianapolis, IN'
      };

      // For demo purposes, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        isEmergency: false
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your visit online or call us at 
            <a href="tel:+13178545309" className="text-primary-600 font-semibold hover:underline ml-2">
              (317) 854-5309
            </a> for immediate assistance.
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🚨</span>
            <div>
              <h3 className="text-red-800 font-bold text-lg">Dental Emergency?</h3>
              <p className="text-red-600">
                For severe pain, broken teeth, or dental trauma, call us immediately at 
                <a href="tel:+13178545309" className="font-bold hover:underline ml-1">
                  (317) 854-5309
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Emergency Checkbox */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 p-4 bg-red-50 rounded-xl border border-red-200"
            >
              <input
                type="checkbox"
                id="isEmergency"
                name="isEmergency"
                checked={formData.isEmergency}
                onChange={handleInputChange}
                className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
              />
              <label htmlFor="isEmergency" className="text-red-800 font-semibold">
                🚨 This is a dental emergency (severe pain, trauma, etc.)
              </label>
            </motion.div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="(317) 555-0123"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={getTomorrowDate()}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Please describe your symptoms, concerns, or any special requests..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800"
              >
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span className="font-semibold">Appointment Request Sent!</span>
                </div>
                <p className="text-sm mt-2">
                  We'll contact you within 1 hour to confirm your appointment. 
                  For urgent matters, please call (317) 854-5309.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800"
              >
                <div className="flex items-center space-x-2">
                  <span>❌</span>
                  <span className="font-semibold">Something went wrong</span>
                </div>
                <p className="text-sm mt-2">
                  Please call us directly at (317) 854-5309 to schedule your appointment.
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg'
              } text-white`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Request...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>📅</span>
                  <span>Request Appointment</span>
                </div>
              )}
            </motion.button>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to receive appointment confirmations and 
              dental care reminders via email and SMS.
            </p>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Prefer to Call or Visit?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+13178545309"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border"
            >
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
              <p className="text-primary-600 font-bold text-lg">(317) 854-5309</p>
              <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-semibold text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm">7225 US-31</p>
              <p className="text-gray-600 text-sm">Indianapolis, IN</p>
              <p className="text-primary-600 text-sm font-medium mt-2">Get Directions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;