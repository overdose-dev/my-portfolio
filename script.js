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
const fullname = document.getElementById("name-input");
const email = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const message = document.getElementById("message-input");
const messageError = document.getElementById("message-error");
const error = document.querySelector(".error-txt");
const error2 = document.querySelectorAll(".error");

function sendEmail() {
  const bodyMessage = `Fullname: ${fullname.value} <br /> Email: ${email.value} <br /> <br /> ${message.value} `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chinazauchenna@gmail.com",
    Password: "74028B7BADC75829FCB24BC28A1039052B47",
    To: "chinazauchenna@gmail.com",
    From: "chinazauchenna@gmail.com",
    Subject: "Hello there, Chinazaekpere!",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Good job!",
        text: "Your Message Has Been Delivered!",
        icon: "success",
      });
    }
  });
}

function confirmInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
      // fullname.style.border = "2px solid red";
      // email.style.border = "2px solid red";
      // message.style.border = "2px solid red";
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
        // fullname.style.border = "none";
        // email.style.border = "none";
        // message.style.border = "none";
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
        // fullname.style.border = "2px solid red";
        // email.style.border = "2px solid red";
        // message.style.border = "2px solid red";
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  confirmInputs();

  if (
    !fullname.classList.contains("error") &&
    !email.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
