document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!mobileNavToggle || !mainNav) {
        console.error('Navigation elements not found');
        return;
    }

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Clone cards for seamless loop
    testimonialCards.forEach(card => {
        const clone = card.cloneNode(true);
        testimonialGrid.appendChild(clone);
    });

    // Reset scroll position when animation ends
    testimonialGrid.addEventListener('animationend', () => {
        testimonialGrid.style.animation = 'none';
        testimonialGrid.offsetHeight; // Trigger reflow
        testimonialGrid.style.animation = 'scroll 40s linear infinite';
    });
}); 