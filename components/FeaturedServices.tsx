import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FeaturedServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#0a0a0a] font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight text-responsive-3xl"
          >
            Powerhouse Performance.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl text-responsive-lg"
          >
            Enterprise-grade solutions engineered for the modern era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: Google Cloud (Full width on mobile, span 2 on larger screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/services/gcp')}
            className="group md:col-span-2 relative bg-[#111] hover:bg-[#161616] transition-colors rounded-2xl md:rounded-[2rem] p-6 md:p-10 cursor-pointer overflow-hidden border border-white/5 touch-friendly"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-blue-900/10 blur-[60px] md:blur-[100px] -mr-16 md:-mr-20 -mt-16 md:-mt-20 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
              <div>
                <Cloud className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mb-4 md:mb-6 stroke-[1.5]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Google Cloud</h3>
                <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">Scalable, secure, and smart cloud migration.</p>
              </div>
              
              <div className="flex items-center justify-between mt-8 md:mt-12">
                <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">INFRASTRUCTURE</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI & ML */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/contact')}
            className="group bg-[#111] hover:bg-[#161616] transition-colors rounded-2xl md:rounded-[2rem] p-6 md:p-10 cursor-pointer border border-white/5 flex flex-col justify-between min-h-[280px] md:min-h-[320px] touch-friendly"
          >
            <div className="absolute top-0 right-0 w-32 h-32 md:w-[200px] md:h-[200px] bg-purple-900/10 blur-[40px] md:blur-[80px] -mr-8 md:-mr-10 -mt-8 md:-mt-10 pointer-events-none" />
            <div>
              <Cpu className="w-8 h-8 md:w-12 md:h-12 text-purple-500 mb-4 md:mb-6 stroke-[1.5]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">AI & ML</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">Predictive analytics & automation.</p>
            </div>
          </motion.div>

          {/* Card 3: SAP Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/services/sap')}
            className="group bg-[#111] hover:bg-[#161616] transition-colors rounded-2xl md:rounded-[2rem] p-6 md:p-10 cursor-pointer border border-white/5 flex flex-col justify-between min-h-[280px] md:min-h-[320px] touch-friendly"
          >
             <div className="absolute top-0 right-0 w-32 h-32 md:w-[200px] md:h-[200px] bg-emerald-900/10 blur-[40px] md:blur-[80px] -mr-8 md:-mr-10 -mt-8 md:-mt-10 pointer-events-none" />
             <div>
              <Database className="w-8 h-8 md:w-12 md:h-12 text-emerald-500 mb-4 md:mb-6 stroke-[1.5]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">SAP Solutions</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">Integrated enterprise resource planning.</p>
            </div>
          </motion.div>

          {/* Card 4: Salesforce (Full width on mobile, span 2 on larger screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={() => navigate('/services/salesforce')}
            className="group md:col-span-2 bg-[#111] hover:bg-[#161616] transition-colors rounded-2xl md:rounded-[2rem] p-6 md:p-10 cursor-pointer border border-white/5 relative overflow-hidden touch-friendly"
          >
             <div className="absolute top-0 right-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-cyan-900/10 blur-[60px] md:blur-[100px] -mr-16 md:-mr-20 -mt-16 md:-mt-20 pointer-events-none" />
             
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px] md:min-h-[250px]">
              <div>
                <Globe className="w-8 h-8 md:w-12 md:h-12 text-cyan-500 mb-4 md:mb-6 stroke-[1.5]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Salesforce & CRM</h3>
                <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">Boost customer engagement with cloud-based CRM.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile-only CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:hidden text-center"
        >
          <button 
            onClick={() => navigate('/services')}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};