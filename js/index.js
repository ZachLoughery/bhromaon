// This code preserves the white padding at the top of the screen when the navbar becomes sticky
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const header = document.querySelector("header").offsetHeight;

  if (window.scrollY >= header) {
    navbar.classList.add("sticky-border");
  } else {
    navbar.classList.remove("sticky-border");
  }
});

let menuToggle = document.getElementById("menu-toggle");
let navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden-menu");
  setTimeout(() => {
    navMenu.classList.toggle("menu-active");
  }, 50);
});
