// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const features = document.querySelectorAll('.feature');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

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
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    features.forEach(feature => {
        observer.observe(feature);
    });

    // Logique pour le menu hamburger
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    });

    // Ferme le menu quand on clique sur un lien
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        });
    });
});
