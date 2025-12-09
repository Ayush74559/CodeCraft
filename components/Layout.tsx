import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Linkedin, Twitter, Facebook, Instagram, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Smart Scroll Logic: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setActiveDropdown(null);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
    lastYRef.current = latest;
  });

  const services = [
    { name: 'Google Cloud Services', path: '/services/gcp' },
    { name: 'SAP Solutions', path: '/services/sap' },
    { name: 'Salesforce', path: '/services/salesforce' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Data Science', path: '/services/data-science' },
    { name: 'DevOps', path: '/services/devops' },
    { name: 'Cyber Security', path: '/services/cyber-security' },
    { name: 'Consulting Services', path: '/services/consulting' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#', hasDropdown: true },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className={`
            relative flex items-center justify-between w-full max-w-5xl px-6 py-3 
            rounded-full transition-all duration-300 border
            ${isScrolled || isMobileMenuOpen 
              ? 'bg-white/80 backdrop-blur-xl border-white/40 shadow-lg shadow-black/5' 
              : 'bg-white/60 backdrop-blur-lg border-white/20 shadow-md'
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-20 group" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">
              Code<span className="text-blue-600">Craftr</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown('services')}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button 
                    className={`
                      px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center space-x-1
                      ${activeDropdown === 'services' || location.pathname.includes('/services') ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}
                    `}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={link.path}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 block
                      ${location.pathname === link.path ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}
                    `}
                  >
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white shadow-sm rounded-full border border-gray-100 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                      >
                        <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/40 p-2 overflow-hidden ring-1 ring-black/5">
                          {services.map((service, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              onClick={() => handleNavClick(service.path)}
                              className="group flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 rounded-xl cursor-pointer transition-colors"
                            >
                              <span className="font-medium">{service.name}</span>
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:bg-[#0077ed] transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-20">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-b-[2rem] overflow-hidden md:hidden border-b border-gray-100"
            >
              <div className="pt-24 pb-8 px-6 flex flex-col space-y-2 max-h-[85vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <div key={i}>
                    {link.hasDropdown ? (
                      <div className="space-y-2">
                         <div className="text-sm font-semibold text-gray-400 px-4 py-2 uppercase tracking-wider">Services</div>
                         <div className="grid grid-cols-1 gap-1 pl-2">
                            {services.map((service, idx) => (
                              <motion.button
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.05) }}
                                onClick={() => handleNavClick(service.path)}
                                className="flex items-center justify-between w-full text-left px-4 py-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors"
                              >
                                {service.name}
                              </motion.button>
                            ))}
                         </div>
                      </div>
                    ) : (
                      <motion.button 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleNavClick(link.path)}
                        className={`flex items-center justify-between w-full text-left px-4 py-4 text-2xl font-semibold tracking-tight rounded-2xl transition-all ${location.pathname === link.path ? 'text-blue-600 bg-blue-50/50' : 'text-gray-900 hover:bg-gray-50'}`}
                      >
                        {link.name}
                        <ArrowRight className={`w-5 h-5 ${location.pathname === link.path ? 'opacity-100' : 'opacity-0'}`} />
                      </motion.button>
                    )}
                    {i < navLinks.length - 1 && !link.hasDropdown && <div className="h-px bg-gray-100 mx-4 my-1" />}
                  </div>
                ))}
                
                <div className="pt-6 mt-4 border-t border-gray-100">
                  <button 
                    onClick={() => handleNavClick('/contact')}
                    className="w-full bg-[#0071e3] text-white py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">CodeCraftr</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                We turn cutting-edge technology into competitive advantage. CC's AI-powered services help businesses modernize, grow faster, and lead with confidence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
                <li><Link to="/schedule" className="hover:text-blue-400 transition-colors">Schedule Meeting</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services/gcp" className="hover:text-blue-400 transition-colors">Google Cloud</Link></li>
                <li><Link to="/services/sap" className="hover:text-blue-400 transition-colors">SAP Solutions</Link></li>
                <li><Link to="/services/salesforce" className="hover:text-blue-400 transition-colors">Salesforce CRM</Link></li>
                <li><Link to="/services/app-development" className="hover:text-blue-400 transition-colors">App Development</Link></li>
                <li><Link to="/services/website-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
                <li><Link to="/services/data-science" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
                <li><Link to="/services/devops" className="hover:text-blue-400 transition-colors">DevOps</Link></li>
                <li><Link to="/services/cyber-security" className="hover:text-blue-400 transition-colors">Cyber Security</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>12222 Merit Drive, Suite 1570<br/>Dallas, TX 75251</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>hello@codecraftr.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} CodeCraftr. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917455932245?text=Send us a Message"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </motion.a>
    </>
  );
};
