import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24 text-center px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?tech')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Page</h1>
          <p className="text-xl text-gray-300">
            "We align with your goals to craft a results-driven design using the latest web technologies—making your site a true business asset"
          </p>
        </div>
      </section>

      {/* Project 1 - DevOps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              src="media/vedio/Untitled design (1).mp4"
              alt="DevOps Project"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={(e) => {
                console.error('Video failed to load:', e);
              }}
              onLoadedData={() => {
                console.log('DevOps video loaded successfully');
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps & Analytics Modernization</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Collaborated with Inovalon, a leader in healthcare analytics, to enhance ELK-based performance dashboards, introduce enterprise DevOps practices, and deliver a robust CI/CD model for automation and agility.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> ELK Dashboard & Performance Engineering
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> DevOps Implementation & CI/CD Pipeline
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Go To Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Project 2 - SWIFT */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SWIFT Technology Centre</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              CodeCraftr partnered with SWIFT Technology Centre, a global FinTech leader, to enhance Oracle Database security, improve replication systems, and optimize performance across critical applications.
              Fast Data Connect partnered with SWIFT Technology Centre, a global FinTech leader, to enhance Oracle Database security, improve replication systems, and optimize performance across critical applications.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> Oracle DB Security Optimization
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> Replication & Performance Tuning
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Go To Project
            </button>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              src="media/vedio/Untitled design (2).mp4"
              alt="SWIFT Project"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={(e) => {
                console.error('Video failed to load:', e);
              }}
              onLoadedData={() => {
                console.log('SWIFT video loaded successfully');
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Teams, Chosen for Results</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              At the core of our services lies a simple promise — technology that works, every time. From cloud integration with Google Cloud Platform to custom CRM solutions using Salesforce, we partner with companies to solve real problems with scalable, future-ready technology. Our approach is rooted in deep industry knowledge and a relentless focus on outcomes.
            </p>
            <p>
              Organizations across industries trust us because we don’t just deliver code — we deliver confidence. Whether it’s streamlining workflows, developing enterprise-grade platforms, or enabling data-driven decisions, we bring clarity to complexity and transform ideas into impact.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;