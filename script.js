const menuButton = document.getElementById("menu");
const fButton = document.getElementById("features-button");
const cButton = document.getElementById("company-button");
const fMenu = document.querySelector(".features-menu");
const cMenu = document.querySelector(".company-menu");
const closeMenuButton = document.getElementById("close-menu");
const navBar = document.querySelector(".go");
const black = document.querySelector(".black");

fButton.addEventListener("click", () => {
  fMenu.classList.toggle("show");
  fButton.classList.toggle("arrow-active");
});

cButton.addEventListener("click", () => {
  cMenu.classList.toggle("show");
  cButton.classList.toggle("arrow-active");
});

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("shownav");
  black.classList.toggle("container");
});

closeMenuButton.addEventListener("click", () => {
  navBar.classList.toggle("shownav");
  black.classList.toggle("container");
});
