//mobile-menu

const close_menu_bt = document.querySelector(".mobile-menu-close-bt");
const mobile_menu = document.querySelector(".mobile-menu");
const activate_menu_bt = document.querySelector(".burger-button");
const body_block = document.querySelector(".body-block");
activate_menu_bt.addEventListener("click", (e) => {
  mobile_menu.style.display = "block";
  body_block.style.display = "none";
});
close_menu_bt.addEventListener("click", (e) => {
  mobile_menu.style.display = "none";
  body_block.style.display = "block";
});
