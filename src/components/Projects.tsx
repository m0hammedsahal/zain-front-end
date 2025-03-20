import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: 'Modern Minimalist Living',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
    },
    {
      title: 'Luxury Office Space',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    },
    {
      title: 'Contemporary Kitchen',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4 px-6 py-3 rounded-full bg-black/30 backdrop-blur-sm inline-block mx-auto"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm inline-block"
        >
          Discover our latest interior design transformations
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-amber-400">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-400/10 text-amber-400 rounded-full hover:bg-amber-400/20 transition-colors inline-flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;