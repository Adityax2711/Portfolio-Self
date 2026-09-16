/**
 * animations.js — Scroll Animations & Interactions
 * Handles reveal animations, typed text, card tilt, and navbar updates
 */

class AnimationManager {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    this.initRevealObserver();
    this.initNavbar();
    this.initMobileMenu();
    this.initTypedText();
    this.initCardTilt();
    this.initMagneticButtons();
    this.initSmoothScroll();
    this.initCounterAnimation();
  }

  // --- Intersection Observer for scroll reveal ---
  initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, this.observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });
  }

  // --- Navbar scroll state ---
  initNavbar() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      // Scrolled state
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active section highlighting
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // --- Mobile menu ---
  initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Typed text effect ---
  initTypedText() {
    const el = document.querySelector('.typed-text');
    if (!el) return;

    const texts = [
      'AI Engineer',
      'Blockchain Enthusiast',
      'Deep Learning Specialist',
      'Web3 Builder',
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;

    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        speed = 50;
      } else {
        el.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        speed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    setTimeout(type, 1000);
  }

  // --- 3D Card tilt effect ---
  initCardTilt() {
    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  // --- Magnetic buttons ---
  initMagneticButtons() {
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-3px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // --- Smooth scroll to sections ---
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // --- Stat counter animation ---
  initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      
      el.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(step);
  }
}

export default AnimationManager;
