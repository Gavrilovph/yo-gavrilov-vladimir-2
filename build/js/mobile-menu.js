let openMenuBtn = document.querySelector('.header__menu-btn');
let openMenuWindow = document.querySelector('.hideMobileMenu');
let closeMenuBtn = document.querySelector('.menu__close');
let hideMenuBtn = document.querySelector ('.header__menu');

openMenuBtn.addEventListener('click', () => {
  openMenuWindow.classList.add('menu');
  hideMenuBtn.classList.add('header__menu-hide');
});

closeMenuBtn.addEventListener('click', () => {
  openMenuWindow.classList.remove('menu');
  hideMenuBtn.classList.remove('header__menu-hide');
})