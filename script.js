// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Animation d'apparition au défilement
    const features = document.querySelectorAll('.feature');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
