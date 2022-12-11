const menuButton = document.getElementById("menu");
const fButton = document.getElementById("features-button");
const cButton = document.getElementById("company-button");
const fMenu = document.querySelector(".features-menu");
const cMenu = document.querySelector(".company-menu");
const closeMenuButton = document.getElementById("close-menu");
const navBar = document.querySelector(".go");
const black = document.querySelector(".black");
const body = document.getElementById("body");

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
  body.classList.toggle("scroll");
});

closeMenuButton.addEventListener("click", () => {
  navBar.classList.toggle("shownav");
  black.classList.remove("container");
  body.classList.toggle("scroll");
});

window.addEventListener("resize", function () {
  black.classList.remove("container");
});
