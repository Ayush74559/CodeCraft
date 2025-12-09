
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { ChatBot } from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import GoogleCloud from './pages/GoogleCloud';
import SapSolutions from './pages/SapSolutions';
import Salesforce from './pages/Salesforce';
import AppDevelopment from './pages/AppDevelopment';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import DataScience from './pages/DataScience';
import DevOps from './pages/DevOps';
import CyberSecurity from './pages/CyberSecurity';
import ConsultingServices from './pages/ConsultingServices';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/gcp" element={<GoogleCloud />} />
        <Route path="/services/sap" element={<SapSolutions />} />
        <Route path="/services/salesforce" element={<Salesforce />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/data-science" element={<DataScience />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/consulting" element={<ConsultingServices />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#f5f5f7]">
        <Navbar />
        <main className="grow">
          <AnimatedRoutes />
        </main>
        <ChatBot />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;