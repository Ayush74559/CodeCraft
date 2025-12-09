// Apple Vision Animation System
// Premium motion effects for enhanced user experience

class AppleVisionAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupHoverEffects();
    this.setupParallaxEffects();
    this.setupTextAnimations();
    this.setupCardInteractions();
    this.setupImageEffects();
    this.setupButtonInteractions();
  }

  // Scroll-triggered animations using Intersection Observer
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.apple-vision-about section');
    sections.forEach(section => observer.observe(section));

    // Observe individual cards and elements
    const animatedElements = document.querySelectorAll(`
      .apple-bio-card,
      .apple-service-card,
      .apple-why-card,
      .apple-story-content,
      .apple-mission-value
    `);
    
    animatedElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
      observer.observe(element);
    });
  }

  // Animate elements with Apple-style effects
  animateElement(element) {
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInView && !element.classList.contains('apple-animated')) {
      element.classList.add('apple-animated');
      
      // Determine animation type based on element
      if (element.classList.contains('apple-bio-card') || 
          element.classList.contains('apple-why-card')) {
        this.scaleInAnimation(element);
      } else if (element.classList.contains('apple-service-card')) {
        this.fadeUpAnimation(element);
      } else if (element.classList.contains('apple-story-content')) {
        this.slideInAnimation(element);
      } else if (element.classList.contains('apple-mission-value')) {
        this.glowInAnimation(element);
      }
    }
  }

  // Apple-style scale-in animation
  scaleInAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.9) translateY(30px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1) translateY(0)';
    });
  }

  // Fade up animation for text content
  fadeUpAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }

  // Slide-in animation for content blocks
  slideInAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    element.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
  }

  // Glow-in animation for mission values
  glowInAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    element.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    });
  }

  // Advanced hover effects
  setupHoverEffects() {
    // Magnetic hover effect for cards
    const cards = document.querySelectorAll(`
      .apple-bio-card,
      .apple-service-card,
      .apple-why-card
    `);

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        this.handleMagneticHover(card, e);
      });

      card.addEventListener('mouseleave', () => {
        this.resetCardPosition(card);
      });
    });

    // Glow sweep effect
    const serviceCards = document.querySelectorAll('.apple-service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.startGlowSweep(card);
      });
    });
  }

  // Magnetic hover effect
  handleMagneticHover(element, e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) * 0.1;
    const deltaY = (y - centerY) * 0.1;
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
  }

  // Reset card position after hover
  resetCardPosition(element) {
    element.style.transform = 'translate(0, 0) scale(1)';
  }

  // Glow sweep animation
  startGlowSweep(element) {
    const glow = element.querySelector('::before') || element;
    glow.style.background = 'linear-gradient(90deg, transparent, rgba(0, 122, 255, 0.3), transparent)';
    
    setTimeout(() => {
      glow.style.background = '';
    }, 600);
  }

  // Parallax effects for background elements
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.apple-hero');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  // Text animation effects
  setupTextAnimations() {
    const headings = document.querySelectorAll(`
      .apple-hero h1,
      .apple-story h2,
      .apple-team h2,
      .apple-services h2,
      .apple-mission h2,
      .apple-why h2,
      .apple-cta h2
    `);

    headings.forEach(heading => {
      this.animateText(heading);
    });
  }

  // Animate text with letter-by-letter effect
  animateText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    // Split text into characters
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`;
      
      element.appendChild(span);
      
      // Animate in
      requestAnimationFrame(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      });
    });
  }

  // Card interaction effects
  setupCardInteractions() {
    const interactiveCards = document.querySelectorAll('.apple-why-card');
    
    interactiveCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.enhanceCard(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.normalizeCard(card);
      });
    });
  }

  // Enhance card on hover
  enhanceCard(card) {
    const icon = card.querySelector('.apple-why-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.boxShadow = '0 8px 32px rgba(0, 122, 255, 0.3)';
    }
    
    // Add subtle border animation
    const border = card.querySelector('::before');
    if (border) {
      border.style.transform = 'scaleX(1)';
    }
  }

  // Normalize card after hover
  normalizeCard(card) {
    const icon = card.querySelector('.apple-why-icon');
    if (icon) {
      icon.style.transform = 'scale(1) rotate(0deg)';
      icon.style.boxShadow = '';
    }
  }

  // Image effects
  setupImageEffects() {
    const images = document.querySelectorAll('.apple-story-image img');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        this.animateImageLoad(img);
      });
    });
  }

  // Animate image loading
  animateImageLoad(img) {
    img.style.opacity = '0';
    img.style.filter = 'blur(10px) scale(1.1)';
    img.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.filter = 'blur(0) scale(1)';
    });
  }

  // Button interaction effects
  setupButtonInteractions() {
    const buttons = document.querySelectorAll('.apple-cta-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        this.enhanceButton(button);
      });
      
      button.addEventListener('mouseleave', () => {
        this.normalizeButton(button);
      });
      
      button.addEventListener('click', (e) => {
        this.createRippleEffect(button, e);
      });
    });
  }

  // Enhance button on hover
  enhanceButton(button) {
    button.style.transform = 'translateY(-2px) scale(1.02)';
    button.style.boxShadow = '0 16px 64px rgba(0, 122, 255, 0.3)';
  }

  // Normalize button after hover
  normalizeButton(button) {
    button.style.transform = 'translateY(0) scale(1)';
    button.style.boxShadow = '';
  }

  // Create ripple effect on button click
  createRippleEffect(button, e) {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Add CSS for ripple effect
  addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Cleanup method
  destroy() {
    // Remove event listeners and observers
    window.removeEventListener('scroll', this.handleScroll);
  }
}

// Initialize Apple Vision animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const appleAnimations = new AppleVisionAnimations();
  
  // Add ripple styles
  appleAnimations.addRippleStyles();
  
  // Make available globally for debugging
  window.AppleVisionAnimations = appleAnimations;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppleVisionAnimations;
}