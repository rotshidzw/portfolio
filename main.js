const openMenu = document.querySelector('.logo-text');
const closeMenu = document.querySelector('.close-x');
const mobileMenu = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});