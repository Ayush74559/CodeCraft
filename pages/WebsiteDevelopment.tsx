
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Layout, Gauge, Shield, Smartphone, Database, Search, Rocket, Code, CheckCircle, ArrowRight, Monitor, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebsiteDevelopment: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black"
        />
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

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
                <Globe className="w-10 h-10 text-blue-400" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Website Development
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Custom-built, high-performance websites optimized for speed, user experience, and search engine visibility—tailored to elevate your digital presence.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. ENGINEERED FOR SPEED (SPLIT SECTION) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              Engineered for Speed, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scalability & Engagement</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              We specialize in building fast, responsive, and SEO-compliant websites that help businesses grow online. Whether you’re launching a corporate website, eCommerce platform, or marketing landing page—our solutions deliver smooth functionality, intuitive navigation, and high-conversion design that engages your audience.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { t: "Responsive Design", d: "Mobile-first layouts that adapt perfectly to smartphones, tablets, laptops, and desktops.", i: Smartphone },
              { t: "CMS & Static Sites", d: "Choose flexible content management or ultra-fast static websites using modern frameworks.", i: Database },
              { t: "Performance Optimization", d: "Optimized images, lazy loading, caching, and CDN integration ensure lightning-fast load times.", i: Gauge },
              { t: "Security & Reliability", d: "SSL implementation, protection against malware, and backup systems keep your website secure.", i: Lock },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                <item.i className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PROCESS SECTION (GRID) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
           <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Our Workflow</span>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Professional Web Solutions That Drive Results</h2>
           <p className="text-gray-500 max-w-3xl mx-auto text-lg">
             We deliver end-to-end website solutions—from planning and design to development, deployment, and maintenance. Our websites are built to visually impress, load fast, and drive measurable results.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              t: "Requirement Discovery", 
              d: "We analyze your business needs, goals, and audience before building your solution—ensuring strategic design and development.",
              i: Search
            },
            { 
              t: "UI/UX & Frontend Dev", 
              d: "Modern user interfaces crafted using React, Next.js, and Tailwind CSS for smooth interaction and clean design.",
              i: Layout
            },
            { 
              t: "SEO & Performance", 
              d: "We apply advanced SEO practices including metadata optimization, semantic HTML, and page speed improvements.",
              i: Rocket
            },
            { 
              t: "Deployment & Optimization", 
              d: "We deploy websites to scalable cloud platforms with automated builds and content delivery networks (CDN).",
              i: Monitor
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
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <card.i className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900">{card.t}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
        </div>
        
        <div className="w-full py-8 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex space-x-16 animate-slide-left min-w-max px-8 justify-center">
             {["React", "Next.js", "Tailwind CSS", "WordPress", "Webflow", "GraphQL", "Docker"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-600 transition-colors cursor-default flex items-center">
                 <Code className="w-5 h-5 mr-3 text-blue-500 opacity-50" />
                 {item}
               </span>
             ))}
             {["React", "Next.js", "Tailwind CSS", "WordPress", "Webflow", "GraphQL", "Docker"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-600 transition-colors cursor-default flex items-center">
                 <Code className="w-5 h-5 mr-3 text-blue-500 opacity-50" />
                 {item}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-32 bg-[#f5f5f7] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Development FAQs</h2>
            <p className="text-gray-500">Answers to the most common questions regarding website design, development, SEO, and hosting.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Can you revamp my existing website?",
                a: "Absolutely. We modernize outdated websites with better UI, faster speed, improved security, and enhanced usability."
              },
              {
                q: "Is SEO part of your development package?",
                a: "Yes. We implement SEO standards including page optimization, structured data, accessibility, and performance tuning."
              },
              {
                q: "Do you provide CMS or custom-coded solutions?",
                a: "Yes. We offer WordPress, Webflow, and full-custom builds using React or Next.js based on your needs."
              },
              {
                q: "Will my website be mobile-optimized?",
                a: "Every website we build follows a mobile-first approach and is tested across all screen sizes and devices."
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

      {/* 6. CTA SECTION */}
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
              We craft cutting-edge websites that elevate your brand, increase engagement, and drive growth. Let’s build your digital success together.
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

export default WebsiteDevelopment;
