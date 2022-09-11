// menu hamburger

document.querySelector(`.header-nav__menu-hamburger`).addEventListener(`click`, () => {
   document.querySelector(`.header-nav__menu-hamburger`).classList.toggle(`active`);
   document.querySelector(`.header-nav__mobile-nav`).classList.toggle(`active`);
});


