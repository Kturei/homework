const body = document.querySelector(".page__body");
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
const menuLinks = headerMenu.querySelectorAll("a");

const toggleBurger = () => {
  burger.classList.toggle("burger--open");
  body.classList.toggle("page__body--no-scroll");
  headerMenu.classList.toggle("header__menu--open");
};
const closeBurger = () => {
  burger.classList.remove("burger--open");
  body.classList.remove("page__body--no-scroll");
  headerMenu.classList.remove("header__menu--open");
};

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleBurger();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeBurger();
  });
});

document.addEventListener("click", (event) => {
  const isClickOnBurger = burger.contains(event.target);
  const isClickOnMenu = headerMenu.contains(event.target);

  if (
    headerMenu.classList.contains("header__menu--open") &&
    !isClickOnMenu &&
    !isClickOnBurger
  ) {
    closeBurger();
  }
});
