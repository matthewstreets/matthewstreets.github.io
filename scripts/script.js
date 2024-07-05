const hamburger = document.querySelector('.ham');
const navLinks = document.querySelector('.nav-links');
const brand = document.querySelector('.brand');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    brand.classList.toggle('inactive');
});