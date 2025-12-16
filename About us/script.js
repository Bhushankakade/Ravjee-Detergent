// Intersection Observer for timeline animations
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

timelineItems.forEach((item) => {
  observer.observe(item);
});

// Smooth scroll for any internal links (if added)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

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

