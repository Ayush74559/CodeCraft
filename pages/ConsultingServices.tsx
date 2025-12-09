
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Map, MousePointer2, Layers, Rocket, Users, Briefcase, CheckCircle, ArrowRight, Target, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConsultingServices: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-black to-black"
        />
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

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
                <Compass className="w-10 h-10 text-amber-400" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Technology Consulting
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
          >
            We guide businesses on tech strategy and growth. From startup validation to enterprise architecture, we help you make smart decisions and execute faster.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto bg-white border-b border-gray-100">
        <div className="text-center mb-16">
           <span className="text-amber-600 font-semibold tracking-wider uppercase mb-2 block">Strategic Expertise</span>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Drive Growth with Expert Guidance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              t: "Startup Guidance", 
              d: "We assist with MVP definition, market validation, and growth strategies to ensure your product hits the mark.",
              i: Lightbulb
            },
            { 
              t: "Technology Roadmapping", 
              d: "Long-term planning to align your technology stack with your business goals and future scaling needs.",
              i: Map
            },
            { 
              t: "Tool Selection", 
              d: "We help you select the best SaaS platforms and software tools to optimize efficiency and reduce costs.",
              i: MousePointer2
            },
            { 
              t: "Architecture Design", 
              d: "Building scalable, robust system architectures that can handle growth and integration complexities.",
              i: Layers
            },
            { 
              t: "Execution Advisory", 
              d: "Hands-on support during launch phases to ensure smooth deployment and operational readiness.",
              i: Rocket
            },
            { 
              t: "Agile Collaboration", 
              d: "We implement agile methodologies, prototyping, and iterative planning to speed up delivery.",
              i: Users
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <card.i className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900">{card.t}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US / BENEFITS */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              Smart Decisions. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Faster Execution.</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              We build secure, intelligent, scalable digital solutions—from websites and data science to cloud automation, cybersecurity, and consulting. Our holistic approach ensures that every piece of your technology puzzle fits together perfectly.
            </p>
            <div className="space-y-4">
                {[
                    "Industry Expertise: Fintech, Edtech, SaaS, Healthtech",
                    "Scalable Systems Architecture",
                    "Cost-Effective Tool Selection",
                    "Accelerated Time-to-Market"
                ].map((item, i) => (
                    <div key={i} className="flex items-center text-gray-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                        {item}
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
             <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-[3rem] border border-amber-100 shadow-lg">
                <Briefcase className="w-16 h-16 text-amber-600 mb-8" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Partnership</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                    "We don't just give advice; we help you execute. Whether you are a startup looking for your first MVP or an enterprise planning a digital transformation, we are your partners in growth."
                </p>
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden">
                        <img src="https://picsum.photos/100/100?random=consulting" alt="Advisor" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">Expert Advisors</div>
                        <div className="text-sm text-gray-500">Ready to help</div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TOOLS STACK */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools We Use</h2>
        </div>
        
        <div className="w-full py-8 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex space-x-16 animate-slide-left min-w-max px-8 justify-center">
             {["Figma", "Jira", "Notion", "Trello", "Draw.io", "Slack", "Monday.com", "Miro"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-amber-600 transition-colors cursor-default flex items-center">
                 <Target className="w-5 h-5 mr-3 text-amber-500 opacity-50" />
                 {item}
               </span>
             ))}
             {["Figma", "Jira", "Notion", "Trello", "Draw.io", "Slack", "Monday.com", "Miro"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-amber-600 transition-colors cursor-default flex items-center">
                 <Target className="w-5 h-5 mr-3 text-amber-500 opacity-50" />
                 {item}
               </span>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Your Success Story</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              We help businesses grow with modern websites, AI-powered insights, cloud automation, cybersecurity, and strategic consulting—all under one roof.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center mx-auto"
            >
              Start Consulting <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ConsultingServices;
