// Hamburger menu
const hamburgerBtn = document.querySelector(".top-section__hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerBtn.nextElementSibling.classList.toggle("open");
});
