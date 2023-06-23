// Menu **************************
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// On
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Off
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
// 링크 클릭 시 메뉴 닫힘
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((a) => a.addEventListener('click', linkAction));

// Header **************************

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 200) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// Swiper **************************
let swiper = new Swiper('.service__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: false,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// ScrollUp **************************
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__info,
         .service__container,
         .place__card,
         .footer__rights`,
  {
    origin: 'top',
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
         .contact__description`,
  {
    origin: 'left',
  }
);

sr.reveal(`.about__img-overlay`, {
  origin: 'right',
  interval: 100,
});

const annual = document.getElementById('annual');

annual.innerText = new Date().getFullYear();
