
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Database, BarChart, TrendingUp, Search, Layers, Code, Cloud, ArrowRight, PieChart, Activity, CheckCircle, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DataScience: React.FC = () => {
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

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
                <Brain className="w-10 h-10 text-cyan-400" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Data Science
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Unlock your data’s potential with end-to-end data science services — from strategy to deployment, we turn data into smart decisions.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. DISCOVER. PREDICT. OPTIMIZE (SPLIT SECTION) */}
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
              Discover. Predict. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Optimize.</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our data science team works with you to turn complex data into clear, actionable insights. From predictive analytics and machine learning to custom dashboards and automation, we help businesses across industries make data-driven decisions that improve outcomes, reduce costs, and uncover new opportunities.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            {[
              { 
                t: "Data Strategy & Consulting", 
                d: "We help you build a strong foundation with the right data architecture, governance, and roadmap. Our team ensures you're collecting the right data and using it to answer the right questions.",
                i: PieChart 
              },
              { 
                t: "AI & Machine Learning", 
                d: "We build custom AI and ML models to solve specific business problems—from demand forecasting and customer segmentation to risk scoring and recommendation engines.",
                i: Brain 
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="flex items-start">
                    <div className="bg-cyan-100 p-3 rounded-xl mr-6">
                        <item.i className="w-8 h-8 text-cyan-700" />
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-900 mb-3">{item.t}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.d}</p>
                    </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SOLUTIONS GRID */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
           <span className="text-cyan-600 font-semibold tracking-wider uppercase mb-2 block">Our Expertise</span>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Business-Focused Data Science Solutions</h2>
           <p className="text-gray-500 max-w-3xl mx-auto text-lg">
             We help you use data to solve real business challenges. Our team builds scalable data pipelines, analyzes trends, and develops predictive models so you can act faster, smarter, and with more confidence. Whether it's reporting, forecasting, or building a data product—we've got you covered.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              t: "Data Discovery & Assessment", 
              d: "We review your existing data sources, assess data quality, and identify key opportunities where analytics or AI can create value.",
              i: Search
            },
            { 
              t: "Data Preparation & Engineering", 
              d: "We clean, transform, and organize your data to make it usable for analysis and modeling. We also build scalable data pipelines when needed.",
              i: Database
            },
            { 
              t: "Model Building & Validation", 
              d: "Our data scientists develop machine learning models using industry best practices, test their accuracy, and refine them to meet your goals.",
              i: Layers
            },
            { 
              t: "Deployment & Monitoring", 
              d: "We help you deploy models into production and set up ongoing monitoring to keep performance on track and make improvements over time.",
              i: Activity
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:border-cyan-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                <card.i className="w-7 h-7 text-cyan-600" />
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
             {["Power BI", "Python", "R", "TensorFlow", "PyTorch", "SQL", "Cloud (AWS / Azure / GCP)"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-cyan-600 transition-colors cursor-default flex items-center">
                 <CheckCircle className="w-5 h-5 mr-3 text-cyan-500 opacity-50" />
                 {item}
               </span>
             ))}
             {["Power BI", "Python", "R", "TensorFlow", "PyTorch", "SQL", "Cloud (AWS / Azure / GCP)"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-cyan-600 transition-colors cursor-default flex items-center">
                 <CheckCircle className="w-5 h-5 mr-3 text-cyan-500 opacity-50" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Science FAQs</h2>
            <p className="text-gray-500">Common questions about our data science and AI services</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do you help companies get started with data science?",
                a: "Yes. We work with businesses at all stages—from beginners to teams looking to scale serious AI initiatives."
              },
              {
                q: "Do you build custom machine learning models?",
                a: "Yes. We design tailored ML models for prediction, classification, recommendation, and NLP use cases."
              },
              {
                q: "Do you provide dashboards and visual analytics?",
                a: "Absolutely. We build interactive dashboards using Power BI, Tableau, or custom web apps."
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Yes. We integrate models and dashboards with your apps, databases, and cloud platforms securely."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 list-none text-lg text-gray-800 hover:text-cyan-600 transition-colors">
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
              We craft cutting-edge websites that elevate your brand, engage customers, and drive growth. Let's build your digital success story—together.
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

export default DataScience;
