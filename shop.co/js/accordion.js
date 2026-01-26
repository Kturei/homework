document.addEventListener("DOMContentLoaded", function () {
  // Переопределяем поведение всех details
  document.querySelectorAll("details.accordion__item").forEach((details) => {
    const summary = details.querySelector("summary");
    const content = details.querySelector(".accordion__text");

    // Настройка стилей
    content.style.transition = "max-height 0.3s ease";
    content.style.overflow = "hidden";

    // Инициализация высоты
    if (details.open) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }

    // Перехват клика
    summary.onclick = function (e) {
      e.preventDefault();

      if (details.open) {
        // Анимация закрытия
        content.style.maxHeight = "0";
        setTimeout(() => (details.open = false), 300);
      } else {
        // Анимация открытия
        details.open = true;
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
      }
    };
  });
});
