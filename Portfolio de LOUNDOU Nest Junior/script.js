// Gestion du menu mobile responsive
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(11, 19, 41, 0.95)';
    navLinks.style.padding = '1.5rem 0';
    navLinks.style.textAlign = 'center';
    navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
});

// Animation d'apparition des éléments au défilement (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Sélectionner les éléments à animer
document.querySelectorAll('.glass-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(30px)';
    box.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(box);
});