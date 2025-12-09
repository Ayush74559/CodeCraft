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
import { ArrowRight, ChevronRight, Zap, Shield, Cpu, CheckCircle2, Clock, User, Mail, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeaturedServices } from '../components/FeaturedServices';

// ⚠️ CONFIGURATION: Update this WhatsApp number with your actual WhatsApp Business number
// Format: Country code + phone number without spaces or special characters
// Example: '1234567890' for +1 (234) 567-890
const WHATSAPP_BUSINESS_NUMBER = '917455932245'; // 🔄 CHANGE THIS TO YOUR WHATSAPP BUSINESS NUMBER

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
  
  // Scheduling form state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  // Generate available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];
  
  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };
  
  const availableDates = generateAvailableDates();
  
  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!selectedDate) newErrors.date = 'Please select a date';
    if (!selectedTime) newErrors.time = 'Please select a time';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log('Meeting scheduled:', {
        ...formData,
        date: selectedDate,
        time: selectedTime
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to schedule meeting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  // Reset form
  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime('');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitted(false);
    setErrors({});
  };
  
  // Send WhatsApp message with meeting details
  const sendWhatsAppMessage = () => {
    if (!selectedDate || !selectedTime) return;
    
    const meetingDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const message = `🎯 Meeting Scheduled with CodeCraftr!

👤 Client: ${formData.name}
🏢 Company: ${formData.company || 'Not specified'}
📧 Email: ${formData.email}

📅 Date: ${meetingDate}
🕐 Time: ${selectedTime}
⏱️ Duration: 30 minutes

💬 Project Details: ${formData.message || 'No additional details provided'}

🔗 Meeting Type: Web Development Consultation
📍 Platform: Web conferencing (link to be provided)

This is an automated confirmation from CodeCraftr scheduling system.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL using configured business number
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };
  
  // Auto-send WhatsApp message after successful scheduling
  useEffect(() => {
    if (isSubmitted && selectedDate && selectedTime) {
      // Delay for better UX, then send WhatsApp message
      const timer = setTimeout(() => {
        sendWhatsAppMessage();
      }, 1000); // 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, selectedDate, selectedTime]);

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

      {/* 5. FUNCTIONAL MEETING SCHEDULER */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase mb-4">Discuss</h2>
           <h3 className="text-4xl md:text-5xl font-bold text-white">Schedule a meeting</h3>
         </div>
          
          {isSubmitted ? (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto border border-gray-700 p-12 text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Meeting Scheduled!</h4>
              <p className="text-gray-300 mb-4">
                Thank you for scheduling a meeting with CodeCraftr. We've sent a confirmation email and WhatsApp message with all the details.
              </p>
              
              {/* WhatsApp Notification */}
              <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-green-400 font-semibold">WhatsApp Sent!</span>
                </div>
                <p className="text-sm text-gray-400">
                  Meeting details sent to WhatsApp automatically
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400">
                  📅 {selectedDate?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} at {selectedTime}
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={sendWhatsAppMessage}
                  className="flex items-center px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Send WhatsApp Again
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Another Meeting
                </button>
              </div>
            </motion.div>
          ) : (
            // Scheduling Form
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                
                {/* LEFT PANEL - MEETING DETAILS & FORM */}
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
                          <Clock className="w-4 h-4" />
                        </div>
                        <span className="text-lg font-medium">30 Minute Meeting</span>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-sm text-blue-100">
                          📋 Web conferencing details provided upon confirmation.
                        </p>
                      </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="Your full name"
                          />
                        </div>
                        {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="your.email@company.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* RIGHT PANEL - DATE & TIME SELECTOR */}
                <div className="p-8 lg:p-12 bg-gray-800">
                  <div className="space-y-6">
                    <h5 className="text-xl font-bold text-white mb-6">Select Date & Time</h5>
                    
                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Choose Date *
                      </label>
                      <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                        {availableDates.map((date, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedDate(date)}
                            className={`text-left p-3 rounded-lg transition-all ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            <div className="font-medium">
                              {date.toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="text-sm text-gray-400">
                              {date.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.date && <p className="text-red-400 text-sm mt-2">{errors.date}</p>}
                    </div>
                    
                    {/* Time Selection */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <label className="block text-sm font-medium text-gray-300">
                          <Clock className="inline w-4 h-4 mr-2" />
                          Choose Time *
                        </label>
                        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 text-sm rounded-lg transition-all ${
                                selectedTime === time
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="text-red-400 text-sm mt-2">{errors.time}</p>}
                      </motion.div>
                    )}
                    
                    {/* Timezone */}
                    <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-300">
                        🕐 India Standard Time (UTC+5:30)
                      </p>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Scheduling...
                        </>
                      ) : (
                        'Schedule Meeting'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
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