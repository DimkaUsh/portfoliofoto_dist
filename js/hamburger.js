const hamburger = () => {
  const hamburger = document.querySelector('.hamburger');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
  const body = document.querySelector('.body');

  const menuLink = document.querySelectorAll('.hamburger-menu__link');

  function toggleMenu() {
    hamburger.classList.toggle('hamburger__open');
    hamburgerMenu.classList.toggle('hamburger-menu__open');
    hamburgerWrapper.classList.toggle('hamburger-wrapper_open');
    body.classList.toggle('body_open');
  }

  hamburger.addEventListener('click', toggleMenu);
  menuLink.forEach((el) => el.addEventListener('click', toggleMenu));
};

export default hamburger;
