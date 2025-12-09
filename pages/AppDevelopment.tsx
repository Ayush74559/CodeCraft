import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Layers, Code, CheckCircle, Zap, Globe, Layout, Smartphone as PhoneIcon, ArrowRight, Server, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppDevelopment: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#000]">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"
        />
        {/* Abstract Background Elements */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <motion.div 
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative z-10 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl inline-flex">
                <Smartphone className="w-10 h-10 text-blue-400" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            App Development
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-8"
          >
            End-to-end mobile and desktop application development built for performance, scalability, and growth.
          </motion.p>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We design and build powerful, user-centric applications that help businesses scale faster. From concept to launch, we deliver secure and reliable solutions for Android, iOS, and desktop platforms using modern technology stacks and proven development practices.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. LIFECYCLE SECTION (4 CARDS) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto -mt-20 relative z-20">
        <div className="text-center mb-16">
           <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Our Process</span>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Complete App Development Lifecycle</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              t: "UI/UX Design & Prototyping", 
              d: "We transform business ideas into intuitive digital designs using wireframes, user research, and interactive prototypes that enhance usability and engagement.",
              i: Layout
            },
            { 
              t: "Cross-Platform & Native Development", 
              d: "We develop fast and secure applications using Flutter, React Native, Swift, and Kotlin with optimized backend architectures for scalability.",
              i: Code
            },
            { 
              t: "Quality Assurance & Device Testing", 
              d: "Our QA engineers verify performance across devices, operating systems, and screen sizes ensuring bug-free and stable releases.",
              i: Shield
            },
            { 
              t: "Deployment & Support", 
              d: "We deploy apps to Google Play and App Store, manage version releases, monitor performance, and provide ongoing updates and maintenance.",
              i: Server
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <card.i className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900">{card.t}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">We build apps using reliable technologies to deliver secure, scalable, and future-ready digital products.</p>
        </div>
        
        <div className="w-full py-8 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex space-x-16 animate-slide-left min-w-max px-8 justify-center">
             {["Node.js", "Firebase", "Flutter", "React Native", "Kotlin", "Swift", "REST APIs", "Cloud Hosting", "CI/CD Pipelines"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-600 transition-colors cursor-default flex items-center">
                 <CheckCircle className="w-5 h-5 mr-3 text-blue-500 opacity-50" />
                 {item}
               </span>
             ))}
             {/* Duplicate for infinite loop feel if needed, usually CSS handles marquee */}
             {["Node.js", "Firebase", "Flutter", "React Native", "Kotlin", "Swift", "REST APIs", "Cloud Hosting", "CI/CD Pipelines"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-600 transition-colors cursor-default flex items-center">
                 <CheckCircle className="w-5 h-5 mr-3 text-blue-500 opacity-50" />
                 {item}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-32 bg-[#f5f5f7] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">App Development FAQs</h2>
            <p className="text-gray-500">Common questions about our mobile and web development process</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Which platforms do you build for?",
                a: "We develop native apps for Android and iOS, and cross-platform apps using Flutter and React Native."
              },
              {
                q: "Do you offer ongoing maintenance and updates?",
                a: "Yes. We provide continuous support including feature upgrades, OS compatibility, security patches, and performance optimization."
              },
              {
                q: "Can you integrate third-party APIs and SDKs?",
                a: "Yes. We integrate payment gateways, analytics, cloud services, authentication tools, and custom enterprise systems."
              },
              {
                q: "How do you ensure app security?",
                a: "We follow OWASP standards, enable encrypted storage, secure APIs, authentication layers, and real-time monitoring systems."
              },
              {
                q: "What is the typical app development timeline?",
                a: "MVP development usually takes 8–12 weeks. Larger platforms follow agile sprints with regular reviews and testing cycles."
              },
              {
                q: "Can you rebuild or modernize my existing app?",
                a: "Yes. We specialize in UI redesign, backend optimization, performance improvement, and feature upgrades for legacy apps."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 list-none text-lg text-gray-800 hover:text-blue-600 transition-colors">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#0070e0] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Empower Your Business Online</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              We craft digital solutions that elevate your brand, engage customers, and drive measurable growth. Let’s build your next big idea together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center mx-auto"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AppDevelopment;