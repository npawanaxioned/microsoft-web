const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav-links");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNav.classList.toggle("active");
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
  })
});

body.addEventListener("scroll", () =>{
  hamburger.classList.remove("active");
  headerNav.classList.remove("active");
});















