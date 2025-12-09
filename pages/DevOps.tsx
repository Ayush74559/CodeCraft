
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Workflow, Box, Terminal, Activity, Cpu, CheckCircle, ArrowRight, GitBranch, Layers, Shield, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DevOps: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for hero background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-black to-black"
        />
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

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
                <Workflow className="w-10 h-10 text-emerald-400" />
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            DevOps Solutions
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Modern DevOps isn’t just about automation — it’s about building reliable, scalable, and secure systems that enable teams to release faster with confidence.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. CORE SERVICES GRID (CI/CD, Containers, IaC, Monitoring) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto bg-white border-b border-gray-100">
        <div className="text-center mb-16">
           <span className="text-emerald-600 font-semibold tracking-wider uppercase mb-2 block">Core Capabilities</span>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">High-Performance Engineering</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              t: "CI/CD Architecture", 
              d: "We build robust, fully automated CI/CD pipelines that eliminate manual deployments and reduce production risks.",
              list: ["Automated Build & Test", "GitOps Methodologies", "Security Scanning"],
              i: GitBranch
            },
            { 
              t: "Containerization", 
              d: "We use Docker and Kubernetes to standardize deployments and simplify scalability for cloud-native apps.",
              list: ["Microservices", "Kubernetes Scaling", "Helm Charts"],
              i: Box
            },
            { 
              t: "Infrastructure Automation", 
              d: "Deploy cloud environments in minutes instead of days using Infrastructure as Code (IaC) blueprints.",
              list: ["Terraform Blueprints", "Cost Optimization", "Security Hardening"],
              i: Terminal
            },
            { 
              t: "Observability & Monitoring", 
              d: "We implement full-stack observability so you never operate in the dark, ensuring better uptime.",
              list: ["Prometheus & Grafana", "Log Management", "Incident Response"],
              i: Activity
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              className="p-10 bg-gray-50 rounded-3xl hover:bg-white border border-gray-100 hover:border-emerald-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <card.i className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">{card.t}</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">{card.d}</p>
              <ul className="space-y-3">
                {card.list.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-500 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        {item}
                    </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MLOPS FEATURE SECTION */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
             <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                 <Cpu className="w-5 h-5 text-blue-600" />
                 <span className="text-blue-700 font-bold text-sm uppercase tracking-wide">AI & Machine Learning</span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              MLOps Lifecycle <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Integration</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              We make your AI systems reliable and production-ready. Our MLOps solutions bridge the gap between data science and operations, ensuring your models are scalable, versioned, and continuously monitored.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    "Model Training Pipelines",
                    "Model Registry & Versioning",
                    "CI/CD for ML Models",
                    "Automated Retraining"
                ].map((item, i) => (
                    <div key={i} className="flex items-center text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
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
            className="flex-1 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-20 rounded-full" />
             <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                    <div>
                        <h4 className="font-bold text-xl">Model Performance</h4>
                        <p className="text-gray-400 text-sm">Real-time drift monitoring</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Live</div>
                </div>
                <div className="space-y-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-3/4 rounded-full" />
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-1/2 rounded-full" />
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-5/6 rounded-full" />
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500 uppercase">Accuracy</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">12ms</div>
                        <div className="text-xs text-gray-500 uppercase">Latency</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500 uppercase">Uptime</div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps & MLOps Stack</h2>
        </div>
        
        <div className="w-full py-8 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex space-x-16 animate-slide-left min-w-max px-8 justify-center">
             {["Kubernetes", "Docker", "GitLab CI", "Jenkins", "Terraform", "Prometheus", "MLflow", "ArgoCD", "GitHub Actions", "AWS", "Azure", "GCP"].map((item, i) => (
               <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-emerald-600 transition-colors cursor-default flex items-center">
                 <Server className="w-5 h-5 mr-3 text-emerald-500 opacity-50" />
                 {item}
               </span>
             ))}
             {/* Duplicate loop */}
             {["Kubernetes", "Docker", "GitLab CI", "Jenkins", "Terraform", "Prometheus", "MLflow", "ArgoCD", "GitHub Actions", "AWS", "Azure", "GCP"].map((item, i) => (
               <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-emerald-600 transition-colors cursor-default flex items-center">
                 <Server className="w-5 h-5 mr-3 text-emerald-500 opacity-50" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps FAQs</h2>
            <p className="text-gray-500">Common questions about our engineering practices</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do you support GitOps or CI/CD pipelines?",
                a: "Yes, we design and implement GitOps pipelines using ArgoCD, GitLab CI, Jenkins, and GitHub Actions."
              },
              {
                q: "Do you offer model deployment and monitoring?",
                a: "Yes. We provide complete model lifecycle management including model versioning, rollout strategies, monitoring, and automated retraining."
              },
              {
                q: "Can you migrate monolith applications to microservices?",
                a: "Absolutely. We break monolithic systems into scalable microservices using containerized architecture and API design."
              },
              {
                q: "Which cloud platforms do you support?",
                a: "We work with AWS, Google Cloud, Azure, and Hybrid & On-Prem Deployments."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer p-6 list-none text-lg text-gray-800 hover:text-emerald-600 transition-colors">
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let’s Build Your DevOps Infrastructure</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Whether you’re launching a product or scaling globally — our DevOps and MLOps solutions help you move faster, smarter, and safer.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center mx-auto"
            >
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default DevOps;
