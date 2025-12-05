(function () {
  const body = document.querySelector(".body");

  const btnOpened = document.querySelector(".about__img-button");
  const btnClosest = document.querySelector(".modal__cancel");
  const modal = document.querySelector(".modal");

  // Burger ---------------------------------
  document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".burger-icon")) {
      e.preventDefault();
      body.classList.toggle("body--opened-menu");
    } else if (target.closest(".header__logo, .nav__item")) {
      e.preventDefault();
      body.classList.remove("body--opened-menu");
    }
  });

  // Modal ---------------------------------
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

  // Tab ---------------------------------
  const tabControls = document.querySelector(".tab-controls");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains("tab-controls__link--active")) return;

    const tabContentID = tabControl.getAttribute("href");
    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector(".tab-controls__link--active");
    const activeContent = document.querySelector(".tab-content--show");

    if (activeControl) {
      activeControl.classList.remove("tab-controls__link--active");
    }
    if (activeContent) {
      activeContent.classList.remove("tab-content--show");
    }

    tabControl.classList.add("tab-controls__link--active");
    tabContent.classList.add("tab-content--show");
  }

  // Accordion

  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        ".accordion-list--opened"
      );
      const accordionOpenedContent = accordionList.querySelector(
        ".accordion-list--opened .accordion-list__content"
      );
      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove("accordion-list--opened");
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle("accordion-list--opened");

      if (accordionItem.classList.contains("accordion-list--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // Slider-gallery
  const swiper = new Swiper(".swiper", {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    },
  });

  // Slider-reviews

  new Swiper(".testimonials__slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      },
    },
  });

  // Mask for tel
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(telInputs);
})();
