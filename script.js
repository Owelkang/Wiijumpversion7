// ============================================
// Wiijump v7 - JavaScript
// ============================================

// Smooth scroll for nav links
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all portal cards and feature cards
document.querySelectorAll('.portal-card, .feature-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Portal card click handlers
document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only trigger if not clicking on the button
        if (!e.target.closest('.btn')) {
            const button = this.querySelector('.btn');
            if (button) {
                window.location.href = button.href;
            }
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const sections = ['#home', '#features', '#portals', '#about'];
    const currentUrl = window.location.hash || '#home';
    const currentIndex = sections.indexOf(currentUrl);

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        window.location.hash = sections[nextIndex];
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        window.location.hash = sections[prevIndex];
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wiijump v7 initialized');
    
    // Add active class to current nav link
    const currentHash = window.location.hash || '#home';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Track navigation
window.addEventListener('hashchange', function() {
    const currentHash = window.location.hash;
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentHash) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
});
