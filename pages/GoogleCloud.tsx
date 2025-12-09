import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, Server, Shield, Activity, Database, Lock, Zap, BarChart } from 'lucide-react';

const GoogleCloud: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. Hero Section - Apple Style */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 opacity-40 bg-gradient-to-b from-blue-900 to-black"
        />
        <motion.div 
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative z-10 max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Google Cloud Services
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-3xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Scalability. Performance. Intelligence. <br/>
            <span className="text-blue-500">Reimagined for Enterprise.</span>
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Solution Cards */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { t: "Architecture Planning", d: "Strategic blueprints for cloud success.", i: Server },
            { t: "Cloud Migration", d: "Seamless transition with zero downtime.", i: Cloud },
            { t: "DevOps & CI/CD", d: "Automated pipelines for rapid deployment.", i: Activity },
            { t: "Monitoring & Optimization", d: "Real-time insights for peak performance.", i: BarChart },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
              className="p-12 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <card.i className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{card.t}</h3>
              <p className="text-xl text-gray-500 font-medium">{card.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Feature Strip */}
      <div className="w-full bg-white border-y border-gray-100 py-8 overflow-hidden">
        <div className="flex space-x-12 animate-slide-left min-w-max px-8">
           {["Networking", "SQL", "BigQuery", "BigTable", "Serverless", "Security", "Firestore", "Kubernetes", "Vertex AI"].map((item, i) => (
             <span key={i} className="text-xl font-semibold text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
               {item}
             </span>
           ))}
        </div>
      </div>

      {/* 4. Info Split */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
             <h2 className="text-5xl font-bold mb-8 leading-tight">
               Reliable, Scalable & <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered Infrastructure.</span>
             </h2>
             <p className="text-xl text-gray-500 leading-relaxed">
               Leverage the full power of Google's global network. We help you build applications that are faster, more secure, and smarter than ever before.
             </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
             <div className="bg-blue-50 p-8 rounded-2xl">
               <Zap className="w-8 h-8 text-blue-600 mb-4" />
               <h4 className="font-bold text-lg">Cloud Functions</h4>
             </div>
             <div className="bg-purple-50 p-8 rounded-2xl mt-8">
               <Database className="w-8 h-8 text-purple-600 mb-4" />
               <h4 className="font-bold text-lg">BigQuery</h4>
             </div>
             <div className="bg-indigo-50 p-8 rounded-2xl">
               <Shield className="w-8 h-8 text-indigo-600 mb-4" />
               <h4 className="font-bold text-lg">Security Command</h4>
             </div>
             <div className="bg-cyan-50 p-8 rounded-2xl mt-8">
               <Cloud className="w-8 h-8 text-cyan-600 mb-4" />
               <h4 className="font-bold text-lg">Anthos</h4>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {[
              "What are the ideal workloads for GCP?",
              "How do you ensure high availability?",
              "Can you integrate with third-party tools?",
              "Does GCP support serverless computing?"
            ].map((q, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 list-none text-lg">
                  <span>{q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6">
                  <p>Our experts analyze your infrastructure to provide the best Google Cloud solution tailored to your specific enterprise needs.</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleCloud;