// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.getElementById("mainNav");

mobileMenuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking a link
const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// Carousel Auto-scroll
const carouselTrack = document.getElementById("carouselTrack");
let scrollPosition = 0;
let isHovering = false;

carouselTrack.addEventListener("mouseenter", () => {
  isHovering = true;
});

carouselTrack.addEventListener("mouseleave", () => {
  isHovering = false;
});

setInterval(() => {
  if (!isHovering) {
    scrollPosition += 1;
    if (scrollPosition >= carouselTrack.scrollWidth / 2) {
      scrollPosition = 0;
    }
    carouselTrack.style.transform = `translateX(-${scrollPosition}px)`;
  }
}, 20);

// Duplicate carousel items for infinite scroll
const carouselItems = carouselTrack.innerHTML;
carouselTrack.innerHTML += carouselItems;

// Fade-in Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
