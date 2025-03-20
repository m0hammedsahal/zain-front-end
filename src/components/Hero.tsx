import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const stats = [
    { icon: <Star className="w-6 h-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '200+', label: 'Happy Clients' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '500+', label: 'Projects Completed' },
  ];

  return (
    <div className="relative pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-amber-400/30 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 px-8 py-4 rounded-full bg-black/30 backdrop-blur-sm border border-amber-400/10 mx-4 md:mx-8"
          >
            Transform Your Space with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 animate-gradient">
              Elegant Design
            </span>
          </motion.h1>

          <div className="h-12 mb-8 px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm inline-block">
            <TypeAnimation
              sequence={[
                'Modern Interior Solutions',
                2000,
                'Luxury Living Spaces',
                2000,
                'Professional Design Services',
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl text-amber-400"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 px-6 py-3 rounded-full bg-black/20 backdrop-blur-sm mx-4 md:block hidden"
          >
            We create stunning interior designs that reflect your style and enhance your living experience.
            From concept to completion, we bring your vision to life.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-400 text-black rounded-full font-medium hover:bg-amber-300 transition-colors flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-400/20 text-white rounded-full hover:border-amber-400/40 transition-colors"
              >
                View Portfolio
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-amber-400/10"
              >
                <div className="text-amber-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;