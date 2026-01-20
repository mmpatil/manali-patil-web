document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Glitch effect on hover for Hero Name (optional, purely CSS or JS enhanced)
    const glitchElement = document.querySelector('.glitch');
    if(glitchElement) {
        glitchElement.addEventListener('mouseover', () => {
            glitchElement.style.animation = 'none';
            void glitchElement.offsetWidth; // trigger reflow
            glitchElement.style.animation = null; 
        });
    }

    // Smooth scroll for anchor links (if browser doesn't support html {scroll-behavior: smooth})
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
