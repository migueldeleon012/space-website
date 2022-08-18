const navbar = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeNavButton = document.querySelector('.close-nav');

hamburger.addEventListener('click', () => {
  navbar.classList.add('active');
});

closeNavButton.addEventListener('click', () => {
  navbar.classList.remove('active');
});
