// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.backgroundColor = 'rgba(184, 184, 184, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(184, 184, 184, 0.75)';
    }
    
    lastScrollTop = scrollTop;
});

// Pause background text animation on hover (optional feature)
const bgText = document.querySelector('.background-text');
const heroSection = document.querySelector('.hero-section');

if (bgText && heroSection) {
    heroSection.addEventListener('mouseenter', () => {
        bgText.style.animationPlayState = 'paused';
    });
    
    heroSection.addEventListener('mouseleave', () => {
        bgText.style.animationPlayState = 'running';
    });
}

// Optional: Add parallax effect to hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image-container');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Optional: Animate elements on page load
window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image-container');
    const heroText = document.querySelector('.hero-text-container');
    const clientsBar = document.querySelector('.clients-bar');
    
    setTimeout(() => {
        if (heroImage) {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }
    }, 100);
    
    setTimeout(() => {
        if (heroText) {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }
    }, 300);
    
    setTimeout(() => {
        if (clientsBar) {
            clientsBar.style.opacity = '1';
            clientsBar.style.transform = 'translateX(-50%) translateY(0)';
        }
    }, 500);
});

// Set initial states for animations
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image-container');
    const heroText = document.querySelector('.hero-text-container');
    const clientsBar = document.querySelector('.clients-bar');
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(30px)';
        heroImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-20px)';
        heroText.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    if (clientsBar) {
        clientsBar.style.opacity = '0';
        clientsBar.style.transform = 'translateX(-50%) translateY(20px)';
        clientsBar.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
});