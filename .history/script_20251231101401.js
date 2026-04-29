// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for background text
const bgText = document.querySelector('.hero-bg-text');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (bgText) {
        bgText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.client-logo').forEach(el => {
    observer.observe(el);
});

// Cursor follow effect (optional - adds a nice touch)
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animate = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animate);
    };
    
    animate();
    
    // Add hover effects
    const interactiveElements = document.querySelectorAll('a, button, .client-logo, .hero-image');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });
};

// Uncomment to enable cursor follower
// createCursorFollower();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add stagger animation to client logos
const clientLogos = document.querySelectorAll('.client-logo');
clientLogos.forEach((logo, index) => {
    logo.style.animation = `fadeInUp 0.6s ease-out ${0.9 + (index * 0.1)}s backwards`;
});

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.className = 'burger-menu';
    burger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    document.querySelector('.nav-container').appendChild(burger);
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
};

// Check if mobile
if (window.innerWidth <= 768) {
    // Mobile-specific functionality can be added here
}

// Performance optimization: Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Add any scroll-based animations here
}, 10);

window.addEventListener('scroll', handleScroll);

console.log('Portfolio loaded successfully! 🎨');