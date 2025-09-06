const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const menuClosedIcon = document.getElementById("menu-closed-icon");
const menuOpenIcon = document.getElementById("menu-open-icon");
const body = document.body;

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("body-no-scroll");

  menuClosedIcon.classList.toggle("hidden");
  menuOpenIcon.classList.toggle("hidden");

  const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
}

mobileMenuButton.addEventListener("click", toggleMenu);

// Event listener for the overlay to close the menu
overlay.addEventListener("click", toggleMenu);

// footer

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("body-no-scroll");

  menuClosedIcon.classList.toggle("hidden");
  menuOpenIcon.classList.toggle("hidden");

  const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
}

mobileMenuButton.addEventListener("click", toggleMenu);

// Event listener for the overlay to close the menu
overlay.addEventListener("click", toggleMenu);

// footer
