const ui = {
  menuButton: document.querySelector(".site-header__menu-button"),
  closeButton: document.querySelector(".site-nav__close"),
  nav: document.querySelector(".site-nav"),
};

if (!ui.menuButton || !ui.closeButton || !ui.nav) {
  console.warn("Menu initialization failed: missing DOM element");
} else {
  initMenu();
}

function initMenu() {
  ui.menuButton.addEventListener("click", openMenu);
  ui.closeButton.addEventListener("click", closeMenu);
}

function openMenu() {
  ui.nav.hidden = false;
  ui.menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  ui.nav.hidden = true;
  ui.menuButton.setAttribute("aria-expanded", "false");
}
