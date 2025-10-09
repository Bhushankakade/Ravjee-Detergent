document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const getDirectionsBtn = document.getElementById("getDirectionsBtn");

  // Form submission handler
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate form processing (e.g., an AJAX call)
      setTimeout(() => {
        // In a real application, you'd handle the response here.
        // Assuming success for this example:

        // Show success message
        if (successMessage) {
          successMessage.style.display = "block";
        }

        // Reset form
        this.reset();

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
          if (successMessage) {
            successMessage.style.display = "none";
          }
        }, 5000);
      }, 1500); // 1.5 second delay simulation
    });
  }

  // Map Directions function
  if (getDirectionsBtn) {
    getDirectionsBtn.addEventListener("click", openDirections);
  }

  function openDirections() {
    const address =
      "Ravjee Detergent, Shop no. 31, Gud Market, New Mondha, Jalna - 431203";
    // A generic Google Maps link for directions query.
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    const newWindow = window.open(url, "_blank");

    if (!newWindow) {
      // Fallback if popup is blocked
      alert(
        "Please allow popups to open Google Maps, or copy this address: " +
          address
      );
    }
  }
});

// The extra self-executing function in the original code appears to be a third-party
// script (likely from Cloudflare) and is not part of the core application logic, so it's omitted.
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
