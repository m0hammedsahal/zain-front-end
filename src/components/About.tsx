import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Custom Designs',
      description: 'Tailored solutions to match your unique style and preferences.',
      icon: '🎨',
    },
    {
      title: 'Expert Team',
      description: 'Experienced designers and architects to bring your vision to life.',
      icon: '👩‍🎨',
    },
    {
      title: 'Quality Materials',
      description: 'We use only the finest materials for durability and aesthetics.',
      icon: '🏗️',
    },
  ];

  return (
    <div className="py-16 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-amber-400/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;