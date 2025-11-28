(function () {
  const body = document.querySelector(".body");

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".burger-icon")) {
      event.preventDefault();
      body.classList.toggle("body--opened-menu");
    } else if (target.closest(".header__logo, .nav__item")) {
      event.preventDefault();
      body.classList.remove("body--opened-menu");
    }
  });
})();
