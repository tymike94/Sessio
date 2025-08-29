// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const features = document.querySelectorAll('.feature');

    // Change la couleur de la navbar au défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animation d'apparition des sections au défilement
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Pour ne jouer l'animation qu'une fois
            }
        });
    }, {
        threshold: 0.2
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
