const headerMenu = document.querySelector(".header_menu");
const sandwich = document.querySelector(".sandwich");

sandwich.addEventListener("click", () => {
  headerMenu.classList.toggle("header_menu_block_state");
  sandwich.classList.toggle("active");
});
