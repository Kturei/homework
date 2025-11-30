(function () {
  const body = document.querySelector(".body");

  const btnOpened = document.querySelector(".about__img-button");
  const btnClosest = document.querySelector(".modal__cancel");
  const modal = document.querySelector(".modal");

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


  const closeModal = () => body.classList.remove("body--opened-modal");
  const openModal = () => body.classList.add("body--opened-modal");

  btnOpened.addEventListener("click", openModal);
  btnClosest.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("button")) {
      e.preventDefault();
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") closeModal();
  });
})();
