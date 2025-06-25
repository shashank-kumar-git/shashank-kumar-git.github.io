
// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Active navigation link
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetId = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${targetId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => {
  observer.observe(section);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');
const toggleIcon = toggleBtn.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.toggle('light-mode', savedTheme === 'light');
  updateToggleIcon();
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  updateToggleIcon();
});

function updateToggleIcon() {
  if (document.body.classList.contains('light-mode')) {
    toggleIcon.className = 'fas fa-sun';
  } else {
    toggleIcon.className = 'fas fa-moon';
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    const typed = new Typed('.typed-text', {
        strings: [
            'Aspiring DevOps Engineer 🚀',
            'Cloud Technology Enthusiast ☁️',
            'Fresh Computer Science Graduate 🎓',
            'Container Technology Learner 🐳',
            'Automation & CI/CD Student ⚙️',
            'Future Site Reliability Engineer 🛡️'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
        startDelay: 500
    });
});

// Skill Progress Bars Animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const width = progressBar.getAttribute('data-width');
      progressBar.style.width = width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Particle Animation
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 6 + 2;
  const hue = Math.random() * 60 + 180; // Blue to cyan range

  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.background = `hsla(${hue}, 70%, 60%, 0.3)`;
  particle.style.animationDelay = Math.random() * 15 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

  container.appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
      createParticle(container);
    }
  }, 25000);
}

// Create additional floating tech elements
function createTechElements() {
  const shapesContainer = document.querySelector('.tech-shapes');

  for (let i = 0; i < 12; i++) {
    const techShape = document.createElement('div');
    techShape.className = 'tech-floating';
    techShape.style.cssText = `
      position: absolute;
      width: ${Math.random() * 80 + 30}px;
      height: ${Math.random() * 80 + 30}px;
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: ${Math.random() > 0.5 ? '50%' : Math.random() * 30 + 'px'};
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0.05;
      animation: techFloat ${Math.random() * 30 + 20}s ease-in-out infinite;
      animation-delay: ${Math.random() * 15}s;
      backdrop-filter: blur(1px);
    `;
    shapesContainer.appendChild(techShape);
  }
}

// Enhanced tech float animation
const style = document.createElement('style');
style.textContent = `
  @keyframes techFloat {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1); 
      opacity: 0.05; 
    }
    25% { 
      transform: translate(60px, -80px) rotate(90deg) scale(1.2); 
      opacity: 0.15; 
    }
    50% { 
      transform: translate(-40px, 60px) rotate(180deg) scale(0.8); 
      opacity: 0.1; 
    }
    75% { 
      transform: translate(80px, 20px) rotate(270deg) scale(1.1); 
      opacity: 0.2; 
    }
  }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission enhancement
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Reset button after 3 seconds (in case of success/error)
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
    this.style.transform = 'scale(1)';
  });

  // Set initial styles
  img.style.opacity = '0';
  img.style.transform = 'scale(0.9)';
  img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Enhanced cursor effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor-glow');
  if (!cursor) {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.1s ease;
    `;
    document.body.appendChild(cursorGlow);
  }

  const cursorElement = document.querySelector('.cursor-glow');
  cursorElement.style.left = e.clientX - 10 + 'px';
  cursorElement.style.top = e.clientY - 10 + 'px';
});

// Performance optimization: Intersection Observer for animations
const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

// Apply to all animated elements
document.querySelectorAll('[data-aos]').forEach(el => {
  animateOnScroll.observe(el);
});

// Button click handlers
function handleButtonClicks() {
  // Get In Touch button - handle all instances with more specific selectors
  const getInTouchBtns = document.querySelectorAll('.btn-primary, a[href="#contact"]');
  getInTouchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  btn._clickHandler = clickHandler;
  btn.addEventListener('click', clickHandler, true);
}
  });

// Download CV button - handle all instances
const downloadBtns = document.querySelectorAll('.btn-secondary, a[download], a[href*=".pdf"]');
downloadBtns.forEach(btn => {
  const href = btn.getAttribute('href');
  const text = btn.textContent.toLowerCase();

  if (href && (href.includes('.pdf') || text.includes('download cv') || btn.hasAttribute('download'))) {
    btn.removeEventListener('click', btn._downloadHandler);

    const downloadHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('CV download initiated: ' + href);

      // Create a temporary anchor element to trigger download
      const downloadLink = document.createElement('a');
      downloadLink.href = href;
      downloadLink.download = btn.getAttribute('download') || 'Shashank_Kumar_Resume.pdf';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    btn._downloadHandler = downloadHandler;
    btn.addEventListener('click', downloadHandler, true);
  }
});

// Social media links - handle all instances
const socialLinks = document.querySelectorAll('.social-link, .hero-social a, .contact-social a');
socialLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;

  link.removeEventListener('click', link._socialHandler);

  const socialHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (href.startsWith('mailto:')) {
      console.log('Opening email client for: shashankkumarsk2001@gmail.com');
      window.location.href = href;
    } else if (href.includes('linkedin.com')) {
      console.log('Opening LinkedIn profile');
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.includes('github.com')) {
      console.log('Opening GitHub profile');
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  link._socialHandler = socialHandler;
  link.addEventListener('click', socialHandler, true);
});
}

// Initialize all functions when page loads
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  createTechElements();
  updateToggleIcon();

  // Initialize button handlers immediately
  handleButtonClicks();

  // Delay button handlers to ensure all elements are rendered
  setTimeout(() => {
    handleButtonClicks();
  }, 200);

  // Add loading complete class to body
  setTimeout(() => {
    document.body.classList.add('loaded');
    // Re-attach button handlers after loading complete
    handleButtonClicks();
  }, 500);
});

// Also handle button clicks after window loads completely
window.addEventListener('load', () => {
  handleButtonClicks();

  // Additional check after a brief delay
  setTimeout(() => {
    handleButtonClicks();
  }, 100);
});

// Force button initialization after all scripts load
setTimeout(() => {
  handleButtonClicks();
}, 1500);

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > konami.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(',') === konami.join(',')) {
    // Easter egg: Matrix rain effect
    createMatrixRain();
    konamiCode = [];
  }
});

function createMatrixRain() {
  const matrix = document.createElement('div');
  matrix.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    pointer-events: none;
  `;

  for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.textContent = String.fromCharCode(Math.random() * 94 + 33);
    drop.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      animation: matrixFall 3s linear infinite;
      color: #00ff00;
      font-family: monospace;
      animation-delay: ${Math.random() * 3}s;
    `;
    matrix.appendChild(drop);
  }

  const matrixStyle = document.createElement('style');
  matrixStyle.textContent = `
    @keyframes matrixFall {
      0% { top: -100px; opacity: 1; }
      100% { top: 100vh; opacity: 0; }
    }
  `;
  document.head.appendChild(matrixStyle);

  document.body.appendChild(matrix);

  setTimeout(() => {
    document.body.removeChild(matrix);
    document.head.removeChild(matrixStyle);
  }, 5000);
}
