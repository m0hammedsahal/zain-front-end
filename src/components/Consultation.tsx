import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Consultation = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const benefits = [
    'Personalized design recommendations',
    'Budget planning assistance',
    'Material and color consultation',
    'Timeline and project planning',
    'Virtual tour of similar projects',
    '3D visualization preview'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book a Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a free consultation with our expert designers to discuss your vision and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-amber-400/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Session</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Preferred Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Project Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-amber-400 text-black rounded-lg hover:bg-amber-300 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Benefits & Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-amber-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <Video className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Virtual Consultation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our virtual consultations offer the same personalized experience as in-person meetings, 
                with the convenience of connecting from anywhere.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-white">45-minute session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span className="text-white">Flexible scheduling</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-amber-400/10">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;