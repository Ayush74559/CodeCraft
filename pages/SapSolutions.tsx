import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Settings, Activity, Users, ArrowRight, CheckCircle, Search, Map, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SapSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 opacity-40 bg-gradient-to-b from-blue-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative z-10 max-w-5xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Reliable SAP Services<br />for Your Business
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            We work closely with you to build and manage SAP systems that support your daily operations, follow industry standards, and help your teams work smarter. Whether it’s automation, insights, or integrations — we ensure your SAP environment is secure, scalable, and future-ready.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. SERVICE CARDS (4 BOXES) */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Understanding Your Business", 
              desc: "We take time to understand your current systems, goals, and challenges to design SAP solutions that truly match your business needs.",
              icon: Search
            },
            { 
              title: "Planning the Solution", 
              desc: "Our consultants create a detailed SAP implementation plan tailored to your company size, industry, and existing IT setup.",
              icon: Map
            },
            { 
              title: "Setup and Configuration", 
              desc: "We handle installation, user setup, workflow customization, and system integrations to ensure your SAP environment works efficiently.",
              icon: Settings
            },
            { 
              title: "Support After Launch", 
              desc: "Our job doesn’t stop at go-live. We provide ongoing support, optimization, system monitoring, and user training.",
              icon: Activity
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/50 hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SAP OVERVIEW SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <span className="text-blue-600 font-semibold tracking-wider uppercase mb-4 block">SAP Expertise</span>
             <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">SAP Solutions</h2>
             <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
               Make your business faster, smarter, and future-ready with our SAP consulting, implementation, and support services. Whether you are getting started or upgrading your system, we help you get the most value from your SAP investment with reliable and scalable solutions.
             </p>
           </motion.div>
        </div>
      </section>

      {/* 4. INTEGRATION SECTION */}
      <section className="py-32 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Integrate. Automate.<br />
              <span className="text-blue-600">Optimize.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Our SAP experts help businesses across industries improve efficiency with powerful digital transformation solutions.
                We support finance, HR, manufacturing, and supply chain operations using SAP tools customized for your business needs.
              </p>
              <p className="font-semibold text-gray-900">
                We don’t just implement SAP — we optimize it to create real business value and long-term stability.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="mt-10 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold flex items-center group"
            >
              Start Optimization <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Block Services */}
          <div className="grid gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Layers className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SAP Implementation</h3>
              <p className="text-gray-600">
                We manage complete SAP setup from planning and system design to testing and training — ensuring smooth go-live.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Users className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SAP Migration (ECC to S/4HANA)</h3>
              <p className="text-gray-600">
                We securely migrate your data and systems with minimal downtime and future-proof architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions About Our SAP Services</h2>
            <p className="text-gray-500">Here are answers to common questions clients ask about improving their SAP systems.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do you help with S/4HANA migration?", a: "Yes. We migrate businesses from ECC to S/4HANA, including system redesign, data transfer, and team training." },
              { q: "Can you connect SAP with other systems?", a: "Yes. We integrate SAP with Salesforce, payment gateways, custom apps, and cloud platforms using SAP BTP." },
              { q: "Do you build custom features in SAP?", a: "Yes. We develop custom reports, workflows, automation scripts, and user interfaces." },
              { q: "Do you support cloud-based SAP deployments?", a: "Yes. We deploy SAP on AWS, Azure, Google Cloud, and SAP Cloud with security and performance tuning." }
            ].map((item, i) => (
              <AccordionItem key={`faq-${i}-${item.q}`} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Empower Your Business<br/>with SAP</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your operations with automation, analytics, and enterprise-grade solutions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-12 py-5 bg-white text-black text-lg font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow duration-300"
            >
              Talk to SAP Expert
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

// Accordion Helper Component
const AccordionItem = ({ question, answer, ...props }: { question: string, answer: string } & React.HTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question}`}
        type="button"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              id={`accordion-content-${question}`}
              className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SapSolutions;
