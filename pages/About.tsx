import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Users, CheckCircle, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import Apple Vision styles
import '../src/styles/apple-vision.css';

const About: React.FC = () => {
  const navigate = useNavigate();

  // Initialize Apple Vision animations
  useEffect(() => {
    // Load Apple Vision animations script
    const script = document.createElement('script');
    script.src = '../src/scripts/apple-vision-animations.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="../src/scripts/apple-vision-animations.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="apple-vision-about min-h-screen pt-20">
      
      {/* 1. Hero - Apple Vision Style */}
      <section className="apple-hero">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-wide"
        >
          Home {'>'} About Us
        </motion.p>
      </section>

      {/* 2. Our Story - Floating Glass Cards */}
      <section className="apple-story">
        <div className="apple-story-content">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Welcome to Our Service Platform
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 leading-relaxed text-lg"
          >
            <p>
              We are a tech-focused team dedicated to building smart, reliable, and user-friendly digital solutions. Our goal is to help individuals, students, and businesses grow faster with the power of technology.
            </p>
            <p>
              This platform is developed and managed by a passionate developer team focused on innovation, reliability, and customer satisfaction.
            </p>
            <p>
              Whether it's website development, AI tools automation, or custom projects — we do it all with a focus on clean design and future-ready technology.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="apple-story-image"
        >
          <video
            src="../media/vedio/Welcome to Our Service Platform.mp4"
            alt="Welcome to Our Service Platform"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </section>

      {/* 3. Developer Team - Apple Glass Cards */}
      <section className="apple-team-premium">
        <div className="apple-team-header">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-2"
          >
            👨‍💻 Developer Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet the minds behind our innovative solutions
          </motion.p>
        </div>

        <div className="apple-team-grid-premium">
          {/* Ayush Chaudhary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="apple-dev-card"
          >
            <div className="dev-card-image-container">
              <img
                src="../media/photos/2a0e1f13-0976-4dd5-9505-37118cbc075f.png"
                alt="Ayush Chaudhary"
                className="dev-card-image"
              />
              <div className="dev-card-social-overlay">
                <motion.a
                  href="https://linkedin.com/in/ayushchaudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/ayushchaudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:ayush@fastdataconnect.com"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v-.273L12 6.1l6.545 4.727V3.821h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
            <div className="dev-card-content">
              <h3 className="dev-card-name">Ayush Chaudhary</h3>
              <p className="dev-card-role">Founder & Lead Developer</p>
              <p className="dev-card-description">
                Specialized in web development, automation, and AI-based solutions. Passionate about building systems that solve real-world problems using modern technologies.
              </p>
            </div>
          </motion.div>
          
          {/* Amanpreet Singh Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="apple-dev-card"
          >
            <div className="dev-card-image-container">
              <img
                src="../media/photos/4d485f26-41ca-47b2-aaf5-83a19d3603ee.png"
                alt="Amanpreet Singh"
                className="dev-card-image"
              />
              <div className="dev-card-social-overlay">
                <motion.a
                  href="https://linkedin.com/in/amanpreetsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/amanpreetsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:amanpreet@fastdataconnect.com"
                  className="dev-social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v-.273L12 6.1l6.545 4.727V3.821h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
            <div className="dev-card-content">
              <h3 className="dev-card-name">Amanpreet Singh</h3>
              <p className="dev-card-role">Co-Developer & Technical Support Lead</p>
              <p className="dev-card-description">
                Focused on backend systems, deployment, and system optimization to ensure performance, stability, and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Services - Floating Tiles */}
      <section className="apple-services">
        <div className="apple-services-header">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-2"
          >
            🚀 Our Services Include
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide a wide range of digital and technical solutions
          </motion.p>
        </div>
        <div className="apple-services-grid">
          {[
            "✅ Website Design & Development",
            "✅ AI Tools & Automation Setup", 
            "✅ Software Development",
            "✅ Custom Projects for Students",
            "✅ Technical Support & Troubleshooting",
            "✅ Hosting & Deployment Help",
            "✅ UI/UX Optimization",
            "✅ Website Maintenance", 
            "✅ Career & Tech Guidance"
          ].map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="apple-service-card"
            >
              <p className="font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Our Mission - Cinematic Focus */}
      <section className="apple-mission">
        <div className="apple-mission-content">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            🎯 Our Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed font-light opacity-90 mb-8"
          >
            "To make advanced technology accessible, simple, and affordable for everyone."
          </motion.p>
          <div className="apple-mission-values">
            {[
              { icon: Heart, text: "Clean & Efficient Development" },
              { icon: Users, text: "Honest Communication" },
              { icon: Star, text: "Long-term Customer Trust" }
            ].map(({ icon: Icon, text }, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="apple-mission-value"
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-bold">{text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us - Magnetic Cards */}
      <section className="apple-why">
        <div className="apple-why-header">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-2"
          >
            🌟 Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What sets us apart from the competition
          </motion.p>
        </div>
        <div className="apple-why-grid">
          {[
            { 
              t: "Modern Development Approach", 
              d: "Using cutting-edge technologies and best practices for future-ready solutions.",
              icon: Code
            },
            { 
              t: "Fast & Friendly Support", 
              d: "Quick response times and personalized attention to every client.",
              icon: Users
            },
            { 
              t: "Affordable Pricing", 
              d: "High-quality services at competitive rates that fit your budget.",
              icon: Star
            },
            { 
              t: "Custom Solutions", 
              d: "Tailored approaches designed specifically for your unique needs.",
              icon: Settings
            },
            { 
              t: "Future-Ready Technology", 
              d: "Staying ahead of trends to ensure long-term success.",
              icon: CheckCircle
            },
            { 
              t: "Strong Focus on User Experience", 
              d: "Creating intuitive, user-friendly interfaces and experiences.",
              icon: Heart
            }
          ].map(({ t, d, icon: Icon }, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="apple-why-card"
            >
              <div className="apple-why-icon">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t}</h3>
              <p className="text-gray-600">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. CTA - Premium Button */}
      <section className="apple-cta">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Let's Build Something Amazing Together.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8"
        >
          Whether you're a student looking for project help, a business needing digital solutions, or someone wanting to learn new technologies — we're here for you.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/contact')} 
          className="apple-cta-button"
        >
          Get in Touch
        </motion.button>
      </section>

    </div>
  );
};

export default About;