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

// hero section

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (slides.length > 0) {
    let currentIndex = 0;
    let slideInterval;

    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("carousel-dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(index);
        stopSlideShow();
        startSlideShow();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".carousel-dot");

    function goToSlide(index) {
      slidesContainer.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
      currentIndex = index;
    }

    function nextSlide() {
      let nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }

    function startSlideShow() {
      slideInterval = setInterval(nextSlide, 3000); // 4 seconds
    }

    function stopSlideShow() {
      clearInterval(slideInterval);
    }

    carouselContainer.addEventListener("mouseenter", stopSlideShow);
    carouselContainer.addEventListener("mouseleave", startSlideShow);

    startSlideShow();
  }
});
