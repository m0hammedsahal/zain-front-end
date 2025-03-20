import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Sofa, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 pt-16 pb-8 border-t border-amber-400/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sofa className="w-8 h-8 text-amber-400" />
              </motion.div>
              <span className="text-2xl font-bold text-white">Zain Interior</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Transforming spaces into extraordinary experiences through innovative design and meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 hover:bg-amber-400/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { text: "About Us", href: "/about" },
                { text: "Services", href: "/services" },
                { text: "Portfolio", href: "/portfolio" },
                { text: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Interior Design",
                "Furniture Design",
                "Space Planning",
                "3D Visualization",
                "Lighting Design",
                "Color Consultation"
              ].map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                contact@zaininterior.com
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                +1 (234) 567-8900
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-amber-400 mr-3" />
                123 Design Street, New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-400/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Zain Interior. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;