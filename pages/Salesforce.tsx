import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, Settings, Database, Users, Zap, BarChart, Globe, MessageSquare, ArrowRight, CheckCircle, Smartphone, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Salesforce: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#001429]">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#001429] to-[#001429]"
        />
        {/* Abstract Clouds */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

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
            className="inline-block mb-4"
          >
             <Cloud className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Salesforce Consulting<br/>& Integration
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Accelerate your digital transformation with tailored Salesforce implementations. 
            From CRM strategy to custom app development, we help organizations automate processes, unify data, and improve engagement across sales, service, and marketing functions.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. SERVICES SECTION (4 CARDS) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              t: "CRM Strategy & Discovery", 
              d: "Assess your current customer workflows and define a scalable CRM roadmap. Identify integration points, automation opportunities, and KPIs aligned with your business goals.",
              i: Globe
            },
            { 
              t: "Salesforce Setup & Customization", 
              d: "Configure Salesforce clouds, roles, permissions, and security. Customize objects, workflows, dashboards, and develop Lightning components using Flow and Apex.",
              i: Settings
            },
            { 
              t: "Data Migration & Integration", 
              d: "Migrate customer data using ETL pipelines. Integrate Salesforce with ERP, billing systems, marketing platforms, and legacy systems using APIs and middleware.",
              i: Database
            },
            { 
              t: "Training & Support", 
              d: "Enable your teams with user training, admin onboarding, and long-term support. Monitor adoption metrics, optimize processes, and ensure ROI through continuous improvement.",
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
              className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:border-blue-300 transition-all duration-300"
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

      {/* 3. FEATURE STRIP */}
      <div className="w-full bg-white border-y border-gray-100 py-10 overflow-hidden">
        <div className="flex space-x-16 animate-slide-left min-w-max px-8">
           {["Einstein AI", "Tableau CRM", "Experience Cloud", "AppExchange", "Apex", "Visualforce", "Lightning", "Salesforce AI"].map((item, i) => (
             <span key={i} className="text-2xl font-semibold text-gray-300 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
               <Zap className="w-5 h-5 mr-2 opacity-50" />
               {item}
             </span>
           ))}
             {["Einstein AI", "Tableau CRM", "Experience Cloud", "AppExchange", "Apex", "Visualforce", "Lightning", "Salesforce AI"].map((item, i) => (
             <span key={`dup-${i}`} className="text-2xl font-semibold text-gray-300 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
               <Zap className="w-5 h-5 mr-2 opacity-50" />
               {item}
             </span>
           ))}
        </div>
      </div>

      {/* 4. FEATURE PANEL SECTION */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
             <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
               Personalized, Scalable, and <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI-Driven Customer Experiences.</span>
             </h2>
             <p className="text-xl text-gray-500 leading-relaxed mb-8">
               Empower your organization with Salesforce’s cloud-first CRM solutions that unify sales, service, marketing, and analytics.
               Automate workflows, gain customer insights, and deliver personalized experiences at scale through a secure and intelligent Salesforce ecosystem.
             </p>
             <button onClick={() => navigate('/contact')} className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
               Learn more about our approach <ArrowRight className="ml-2 w-4 h-4" />
             </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
             {/* Sales Cloud Card */}
             <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center mb-4">
                 <div className="bg-blue-600 p-2 rounded-lg mr-4">
                   <BarChart className="w-6 h-6 text-white" />
                 </div>
                 <h4 className="font-bold text-2xl text-gray-900">Sales Cloud</h4>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Automate pipelines and track revenue in real-time. Improve lead quality, forecasting, and collaboration through AI-powered insights and dashboards.
               </p>
             </div>

             {/* Service Cloud Card */}
             <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center mb-4">
                 <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                   <MessageSquare className="w-6 h-6 text-white" />
                 </div>
                 <h4 className="font-bold text-2xl text-gray-900">Service Cloud</h4>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Deliver omnichannel customer support faster and smarter. Use AI, automation, and knowledge management to reduce response time and increase satisfaction.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA SECTION (BLUE BANNER) */}
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
              We craft cutting-edge digital solutions that elevate your brand, engage customers, and drive growth. <br className="hidden md:block"/> Let’s build your success story — together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Salesforce FAQs</h2>
            <p className="text-gray-500">Find answers for deploying and maintaining Salesforce CRM</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What businesses benefit most from Salesforce?",
                a: "Salesforce suits startups to enterprises across retail, healthcare, fintech, and SaaS businesses seeking scalable CRM systems."
              },
              {
                q: "What makes Salesforce stand out from other CRMs?",
                a: "Its ecosystem, Einstein AI, AppExchange marketplace, and cross-cloud integrations place Salesforce ahead of competitors."
              },
              {
                q: "Can Salesforce integrate with old systems?",
                a: "Yes. Salesforce connects through APIs, MuleSoft, middleware platforms, and custom integrations."
              },
              {
                q: "How customizable is Salesforce?",
                a: "Organizations can build workflows, automation, custom UI, reports, and portals using Lightning and Apex."
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

    </div>
  );
};

export default Salesforce;
