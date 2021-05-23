window.addEventListener("scroll", () => {
  const mainNav = document.querySelector(".main-header__navbar");
  mainNav.classList.add("active");
  if (window.scroll === 0) {
    mainNav.classList.remove("active");
  }
});
