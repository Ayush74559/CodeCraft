
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Lock, Scan, FileCheck, CheckCircle, ArrowRight, Server, Eye, AlertTriangle, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CyberSecurity: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900 via-black to-black"
        />
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
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
                <Shield className="w-10 h-10 text-red-500" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            End-to-End <br/>Cybersecurity Services
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
          >
            We protect applications, systems, and infrastructure from modern cyber threats with proactive defense strategies.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              t: "Vulnerability Scanning", 
              d: "Detect weaknesses in networks, servers, and web applications before attackers do.",
              i: Scan
            },
            { 
              t: "Ethical Hacking", 
              d: "Simulate real-world attacks to discover critical risks and patch vulnerabilities.",
              i: AlertTriangle
            },
            { 
              t: "Security Hardening", 
              d: "Apply firewall tuning, access controls, and system lockdown to reduce your attack surface.",
              i: Lock
            },
            { 
              t: "Compliance Audit", 
              d: "ISO 27001, GDPR, HIPAA, SOC2 readiness and reporting to ensure regulatory compliance.",
              i: FileCheck
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:border-red-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <card.i className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900">{card.t}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNOLOGY / CAPABILITIES STRIP */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Stack</h2>
        </div>
        
        <div className="w-full py-8 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex space-x-16 animate-slide-left min-w-max px-8 justify-center">
             {["SIEM", "EDR", "Penetration Testing", "Zero Trust", "Firewalls", "Identity Management", "Encryption", "Cloud Security"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-red-600 transition-colors cursor-default flex items-center">
                 <Shield className="w-5 h-5 mr-3 text-red-500 opacity-50" />
                 {item}
               </span>
             ))}
             {["SIEM", "EDR", "Penetration Testing", "Zero Trust", "Firewalls", "Identity Management", "Encryption", "Cloud Security"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-red-600 transition-colors cursor-default flex items-center">
                 <Shield className="w-5 h-5 mr-3 text-red-500 opacity-50" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cybersecurity FAQs</h2>
            <p className="text-gray-500">Common questions about securing your digital assets</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do you test existing websites and apps?",
                a: "Yes. We perform OWASP Top 10 testing and comprehensive vulnerability scanning to identify and mitigate risks."
              },
              {
                q: "Do you provide 24/7 monitoring?",
                a: "Yes. We utilize SIEM (Security Information and Event Management) and EDR (Endpoint Detection and Response) tools with real-time alerts."
              },
              {
                q: "Do you help with compliance?",
                a: "Yes. We assist with readiness and reporting for NIST, HIPAA, PCI-DSS, and GDPR frameworks."
              },
              {
                q: "Do you offer cloud security?",
                a: "Yes. We secure AWS, Azure, and GCP environments using best practices for identity, access, and configuration."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 list-none text-lg text-gray-800 hover:text-red-600 transition-colors">
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
              We craft high-performance websites and enterprise systems that grow your business and protect your future.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center mx-auto"
            >
              Secure Your Future <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default CyberSecurity;
