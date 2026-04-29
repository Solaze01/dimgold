// Smooth scroll for navigation links
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

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.backgroundColor = 'rgba(184, 184, 184, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(184, 184, 184, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Pause scroll animation on hover
const scrollText = document.querySelector('.scroll-text');
const scrollContainer = document.querySelector('.scroll-text-container');

if (scrollText && scrollContainer) {
    scrollContainer.addEventListener('mouseenter', () => {
        scrollText.style.animationPlayState = 'paused';
    });

    scrollContainer.addEventListener('mouseleave', () => {
        scrollText.style.animationPlayState = 'running';
    });
}

// Image load animation
window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    const clientLogos = document.querySelector('.client-logos');
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(30px)';
        heroImage.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (clientLogos) {
        clientLogos.style.opacity = '0';
        clientLogos.style.transform = 'translateY(20px)';
        clientLogos.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            clientLogos.style.opacity = '1';
            clientLogos.style.transform = 'translateY(0)';
        }, 600);
    }
});