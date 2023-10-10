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
