"use strict";

// navbar가 스크롤 하여 내려가면 투명하게 만든다.
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
// handle scrolling when tapping on the navber menu.
const navbarMenu = document.querySelector(".navbar__menu");
const navbarContact = document.querySelector(".home__contact");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollSelector(link);
});
navbarContact.addEventListener("click", (event) => {
  scrollSelector("#contact");
});
// Make home slowly fade to transparent as the window scroll down.
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollSelector(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
