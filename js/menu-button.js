document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-menu-button");
  const siteMenu = document.querySelector(".header-site-menu");

  if (!(toggleButton instanceof HTMLElement) || !(siteMenu instanceof HTMLElement)) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    siteMenu.classList.toggle("is-show");
  });
});
