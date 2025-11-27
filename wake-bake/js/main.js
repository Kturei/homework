(function () {
  const burger = document.querySelector(".burger-icon");
  const body = document.querySelector(".body");
  const nav__item = document.querySelectorAll(".nav__item");
  const header__logo = document.querySelector('.header__logo')

  burger.addEventListener("click", () => {
    body.classList.toggle("body--opened-menu");
  });

  header__logo.addEventListener("click", () => {
    body.classList.remove("body--opened-menu");
  });
  nav__item.forEach((el) => {
    el.addEventListener("click", () => {
      body.classList.remove("body--opened-menu");
    });
  }); 
})();
