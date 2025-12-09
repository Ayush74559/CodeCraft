import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence, 
  useMotionValue, 
  useVelocity, 
  useAnimationFrame 
} from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Shield, Cpu, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeaturedServices } from '../components/FeaturedServices';

// --- SLIDER DATA ---
const SLIDES = [
  {
    id: 1,
    theme: "from-blue-900/90 to-black",
    title: "Streamline Your Business with Enterprise Platforms",
    subtitle: "Optimize operations using Salesforce, SAP & More",
    points: ["CRM Integration", "Enterprise Automation", "SAP Implementation"],
    cta: "Get Enterprise Help",
    link: "/contact"
  },
  {
    id: 2,
    theme: "from-cyan-900/90 to-black",
    title: "Scale Smarter with Cloud-Powered Solutions",
    subtitle: "Deploy faster. Scale smarter. Operate better.",
    points: ["Google Cloud & AWS", "CI/CD Pipelines", "Serverless Architecture"],
    cta: "Discover Cloud Solutions",
    link: "/services/gcp"
  },
  {
    id: 3,
    theme: "from-emerald-900/90 to-black",
    title: "Revolutionize Healthcare with Artificial Intelligence",
    subtitle: "Building smarter solutions for a smarter world",
    points: ["Machine Learning Models", "AI Automation", "Chatbots & Predictive Analytics"],
    cta: "Explore AI Services",
    link: "/projects"
  },
  {
    id: 4,
    theme: "from-indigo-900/90 to-black",
    title: "AI-Powered Global Digital Engineering Partner",
    subtitle: "Helping businesses unlock their true potential",
    points: ["Salesforce Partners Program", "Healthcare Technology", "GCP & AWS Solutions"],
    cta: "Let's Connect",
    link: "/contact"
  }
];

// Helper to wrap numbers for infinite scroll
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SLIDER LOGIC ---
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // 6 seconds for better reading time
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div ref={containerRef} className="bg-black text-white font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* 1. CINEMATIC SLIDER HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
            aria-label="Background video showing digital grid animation"
            onError={(e) => {
              console.warn('Video failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-digital-grid-2786-large.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-80" />
        </div>

        {/* Dynamic Gradient Overlay */}
        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute inset-0 z-10 ${SLIDES[currentSlide].theme} via-black/40 to-transparent`}
          />
        </AnimatePresence>

        {/* Slide Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="max-w-4xl"
              >
                 {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-sm font-medium tracking-wide mb-8 text-blue-200 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>
                    CodeCraftr
                  </span>
                </motion.div>

                {/* Heading - Cinematic Reveal */}
                <motion.h1 
                  initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.5 } }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier for "Apple" feel
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.05] drop-shadow-2xl"
                >
                  {SLIDES[currentSlide].title}
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-2xl leading-relaxed tracking-wide"
                >
                  {SLIDES[currentSlide].subtitle}
                </motion.p>

                {/* Points */}
                <motion.div 
                   initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                   exit={{ opacity: 0, filter: "blur(5px)" }}
                   transition={{ delay: 0.6, duration: 0.8 }}
                   className="flex flex-wrap gap-4 mb-12"
                >
                  {SLIDES[currentSlide].points.map((point, i) => (
                    <div 
                      key={i} 
                      className="flex items-center text-sm md:text-base font-medium text-white/90 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-lg transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2.5" />
                      {point}
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button 
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px -10px rgba(255,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(SLIDES[currentSlide].link)}
                  className="group relative px-9 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 flex items-center">
                    {SLIDES[currentSlide].cta} <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Controls: Dots only (Arrows removed as requested) */}
        <div className="absolute bottom-12 z-30 flex gap-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="group relative py-4"
            >
              <div 
                className={`h-1.5 rounded-full transition-all duration-700 ease-[0.16,1,0.3,1] shadow-lg ${
                  i === currentSlide 
                    ? 'w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`} 
              />
            </button>
          ))}
        </div>
      </section>

      {/* 2. FEATURED SERVICES (BENTO GRID) */}
      <FeaturedServices />

      {/* 3. PARALLAX TEXT SECTION */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black z-0" />
        <div className="relative z-10 transform -rotate-2 origin-center">
           <ParallaxText baseVelocity={-2}>Innovate. Automate. Elevate.</ParallaxText>
           <ParallaxText baseVelocity={2}>CodeCraftr.</ParallaxText>
        </div>
      </section>

      {/* 4. BENEFITS / SPECS (TITANIUM STYLE) */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-[1000px] mx-auto">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center mb-24"
          >
            <h2 className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase mb-4">The Advantage</h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-400 to-gray-600">
              Titanium-grade<br/>Reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
             {[
               { t: "Enhanced Efficiency", v: "2x", d: "Faster processing with automated workflows.", i: Zap },
               { t: "Cost Reduction", v: "40%", d: "Lower operational costs via cloud optimization.", i: Shield },
               { t: "Deployment Speed", v: "10x", d: "Rapid CI/CD pipelines and delivery.", i: Cpu }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="text-center md:text-left"
               >
                 <item.i className="w-8 h-8 text-gray-400 mb-6 mx-auto md:mx-0" />
                 <h3 className="text-6xl font-bold text-white mb-2">{item.v}</h3>
                 <p className="text-xl font-semibold text-gray-300 mb-2">{item.t}</p>
                 <p className="text-gray-500 leading-relaxed">{item.d}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. VISIONARY LEADERSHIP - CALENDLY STYLE MEETING SCHEDULER */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase mb-4">Discuss</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Schedule a meeting</h3>
          </div>
          
          {/* Calendly Style Card */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              
              {/* LEFT PANEL - MEETING DETAILS */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Company Info */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">CodeCraftr</h4>
                      <p className="text-blue-200 text-sm">IT Consulting Excellence</p>
                    </div>
                  </div>
                  
                  {/* Meeting Details */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-2xl font-bold mb-2">Web Developments</h5>
                      <p className="text-blue-200">Professional IT Solutions</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">30</span>
                      </div>
                      <span className="text-lg font-medium">30 Minute Meeting</span>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-blue-100">
                        📋 Web conferencing details provided upon confirmation.
                      </p>
                    </div>
                  </div>
                  
                  {/* Motivational Quote */}
                  <div className="bg-white/10 rounded-lg p-6 border-l-4 border-white">
                    <p className="text-blue-100 italic leading-relaxed">
                      "Every expert was once a beginner. Embrace the bugs, celebrate the breakthroughs, and remember—each line of code is a step toward unlocking endless possibilities."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* RIGHT PANEL - DATE SELECTOR */}
              <div className="p-8 lg:p-12 bg-gray-800">
                <div className="space-y-6">
                  <h5 className="text-xl font-bold text-white mb-6">Select a Date & Time</h5>
                  
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
                    </button>
                    <h6 className="text-lg font-semibold text-white">December 2025</h6>
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="space-y-4">
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-xs font-medium text-gray-400 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar Dates */}
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                        <button
                          key={date}
                          className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all hover:bg-blue-500/20 ${
                            date >= 9 && date <= 15
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : date < 9
                                ? 'text-gray-600 cursor-not-allowed'
                                : 'text-gray-300 hover:bg-gray-700'
                          }`}
                          disabled={date < 9}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Timezone */}
                  <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-300">
                      🕐 India Standard Time (UTC+5:30)
                    </p>
                  </div>
                  
                  {/* Select Time Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6">
                    Select Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERS (Horizontal Scroll) */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Visionary Leadership.</h2>
            <button
              onClick={() => navigate('/about')}
              className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Meet the team <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
            {[
              { name: "Mike Agar", role: "CEO / CRO", img: "/media/photos/1578432474807.jpeg" },
              { name: "Kanupriya", role: "COO", img: "/media/photos/kanupriya.jpg" },
              { name: "Marc Mulzer", role: "Advisor Tech", img: "/media/photos/1761311817333.jpeg" },
              { name: "Roy Hastins", role: "Partner Delivery", img: "/media/photos/1516279550307.jpeg" }
            ].map((leader, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] snap-start"
                whileHover={{ y: -10 }}
              >
                <div className="h-[360px] rounded-2xl overflow-hidden mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                <p className="text-blue-500 font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-16 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the forward-thinking enterprises building the future with CodeCraftr.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]"
          >
            Start Your Journey
          </button>
        </motion.div>
      </section>

    </div>
  );
};

// --- FIX PARALLAX TEXT ---
function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Infinite scroll logic: wraps from 0% to -25% (since there are 4 copies, 1/4 = 25%)
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Switch direction if scrolling reverse
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-4">
      <motion.div 
        className="flex flex-nowrap text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white/30 hover:text-white/50 transition-colors duration-500 whitespace-nowrap" 
        style={{ x }}
      >
        <span className="block mr-12 md:mr-24">{children}</span>
        <span className="block mr-12 md:mr-24">{children}</span>
        <span className="block mr-12 md:mr-24">{children}</span>
        <span className="block mr-12 md:mr-24">{children}</span>
      </motion.div>
    </div>
  );
}

export default Home;