export const sizes = () => {
  const sizesList = document.querySelector('.product__sizes-list');
  const sizesButtons = document.querySelectorAll('.product__sizes-button');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target.classList.contains("product__sizes-button")) return;

    sizesButtons.forEach((button) =>
      button.classList.remove("product__sizes-button--active")
    );
    target.classList.add("product__sizes-button--active");
  };

  sizesList.addEventListener("click", handleSizeClick);
};
