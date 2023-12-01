var navLinks = document.getElementById("Nav-lists");
var open = document.getElementById("menu");
var close = document.getElementById("close");

function showMenu() {
  navLinks.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
}

function hideMenu() {
  navLinks.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
}

navLinks.addEventListener("click", function () {
  navLinks.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
});

window.addEventListener("click", function (e) {
  if (e.target === navLinks) {
    navLinks.style.display = "none";
  }
});

// Scroll Reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal("section > h1, section > div", { origin: "top" });
ScrollReveal().reveal("#service-card", { origin: "left" });
ScrollReveal().reveal("#hero-img", { origin: "right" });
ScrollReveal().reveal("#Nav-lists", { origin: "right" });

// Typed JS
const typed = new Typed(".myRoles", {
  strings: ["Frontend Developer.", "Technical Writer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});

// Swiper JS
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
});

// Receive Email using JavaScript
const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "email@website.com",
    From: "you@isp.com",
    Subject: "This is the subject of your email",
    Body: "This is the body of your email",
  }).them((message) => alert(message));
}
