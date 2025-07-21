import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Clinic coordinates
  const clinicLocation = {
    lat: 39.7684, // Approximate coordinates for 7225 US-31, Indianapolis
    lng: -86.1581
  };

  useEffect(() => {
    const initMap = () => {
      if (window.google && mapRef.current) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: clinicLocation,
          zoom: 15,
          mapTypeId: 'roadmap',
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [{"weight": "2.00"}]
            },
            {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#9c9c9c"}]
            },
            {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [{"visibility": "on"}]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{"color": "#f2f2f2"}]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": 45}]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{"visibility": "simplified"}]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
            }
          ]
        });

        // Custom marker
        const marker = new window.google.maps.Marker({
          position: clinicLocation,
          map: mapInstance,
          title: 'Same Day Dental',
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#0066cc" stroke="white" stroke-width="4"/>
                <text x="20" y="26" text-anchor="middle" fill="white" font-size="16">🦷</text>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 20)
          }
        });

        // Info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 10px 0; color: #0066cc; font-size: 16px; font-weight: bold;">
                Same Day Dental
              </h3>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                📍 7225 US-31, Indianapolis, IN
              </p>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                📞 (317) 854-5309
              </p>
              <div style="margin: 8px 0; color: #666; font-size: 14px;">
                <strong>⭐ 4.1 Rating</strong> • 2,742 Reviews
              </div>
              <div style="margin: 10px 0;">
                <a href="tel:+13178545309" 
                   style="background: linear-gradient(135deg, #0066cc, #00ccff); 
                          color: white; 
                          padding: 8px 16px; 
                          border-radius: 20px; 
                          text-decoration: none; 
                          font-size: 12px; 
                          font-weight: bold;
                          display: inline-block;">
                  Call Now
                </a>
              </div>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
        });

        setMap(mapInstance);
        setIsLoaded(true);
      }
    };

    if (window.google) {
      initMap();
    } else {
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle);
          initMap();
        }
      }, 100);
    }
  }, []);

  const getDirections = () => {
    const destination = "7225 US-31, Indianapolis, IN";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  const callClinic = () => {
    window.location.href = 'tel:+13178545309';
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located on US-31 in Indianapolis. Easy parking and handicap accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">
                    7225 US-31<br />
                    Indianapolis, IN
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getDirections}
                    className="mt-3 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Get Directions →
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-1">(317) 854-5309</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={callClinic}
                    className="mt-3 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    Call Now
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-800 font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="mt-3 p-2 bg-red-100 rounded-lg">
                      <p className="text-red-800 text-xs font-semibold">🚨 Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Patient Reviews</h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl font-bold text-yellow-600">4.1</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">2,742 Google Reviews</p>
                  <p className="text-xs text-gray-500 mt-2">
                    "Excellent emergency care and friendly staff!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 lg:h-[500px] relative">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading map...</p>
                    </div>
                  </div>
                )}
                <div ref={mapRef} className="w-full h-full" />
                
                {/* Map Overlay Buttons */}
                <div className="absolute top-4 right-4 space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getDirections}
                    className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
                    title="Get Directions"
                  >
                    <span className="text-primary-600 text-lg">🧭</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={callClinic}
                    className="bg-primary-500 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
                    title="Call Clinic"
                  >
                    <span className="text-white text-lg">📞</span>
                  </motion.button>
                </div>

                {/* Map Info Card */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg max-w-xs">
                  <h4 className="font-bold text-gray-800 mb-1">Same Day Dental</h4>
                  <p className="text-sm text-gray-600 mb-2">Emergency & General Dentistry</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>⭐ 4.1</span>
                    <span>📍 7225 US-31</span>
                    <span>📞 (317) 854-5309</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Visit Us?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Experience the Same Day Dental difference. Professional care, 
              modern facility, and emergency services when you need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-200"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={getDirections}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMap;