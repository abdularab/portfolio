console.log("JavaScript is linked and working!"); /* to test my javascript */

/* get the menu on the side to work*/
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("active-navbar"); // Optionally, prevent body scroll when navbar is open
});
