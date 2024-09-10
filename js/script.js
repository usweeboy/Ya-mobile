// Бургер-меню
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu__wrapper');
const headerBurger = document.querySelector('.header-burger');

const body = document.body;

if (menu && headerBurger) {
  headerBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
  });
};

// Закрыть меню при нажатии на Ecsape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
  }
});

// Закрыть меню при клике вне его
menuWrapper.addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

headerBurger.addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

menu.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  menu.classList.remove('active');
  headerBurger.classList.remove('active');
  body.classList.remove('lock');
});



// Липкий header
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 70) {
    header.classList.add('header-sticky');
  } else {
    header.classList.remove('header-sticky');
  }
});



// Вернуться наверх страницы
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTop = document.querySelector(".scroll-to-top");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 400) {
      scrollToTop.classList.add('active');
    } else {
      scrollToTop.classList.remove('active');
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  scrollToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
