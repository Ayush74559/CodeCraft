import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Network, Database, Code } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Content */}
        <div className="bg-linear-to-br from-gray-900 to-blue-900 rounded-2xl p-10 text-white shadow-xl flex flex-col justify-center">
          <h4 className="text-blue-300 font-semibold uppercase tracking-wide mb-2">We'd love to hear from you</h4>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Whether you have a question, need support, or just want to say hello — our team is ready to help you. Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-8">
             {[
               { t: "Cloud Infrastructure", d: "Automate resource setup & scaling.", i: Cloud },
               { t: "Hybrid Networking", d: "Secure cloud & on-prem networking.", i: Network },
               { t: "Google Cloud", d: "Boost performance with GCP tools.", i: Database },
               { t: "SAP & Salesforce", d: "Optimize Solutions for Enterprise.", i: Code }
             ].map((item, i) => (
               <div key={i} className="flex items-start">
                 <div className="bg-white/10 p-3 rounded-lg mr-4">
                   <item.i className="w-6 h-6 text-blue-300" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white text-lg">{item.t}</h3>
                   <p className="text-gray-400 text-sm">{item.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="john@company.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service You Need</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-600">
                <option>Cloud Infrastructure Management</option>
                <option>Networking Solutions</option>
                <option>Google Cloud Services</option>
                <option>SAP & Salesforce</option>
                <option>Website Development</option>
                <option>AI & Automation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Send Message
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/917455932245?text=Send us a Message"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Message us on WhatsApp
              </a>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;