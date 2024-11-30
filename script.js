const menuToggle = document.getElementById('hamburger');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('scroll-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
