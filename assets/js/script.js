const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav-links");
const navLink = document.querySelectorAll(".nav-link")

//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNav.style.opacity = "1";
  headerNav.style.height = "auto";
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
    // headerNav.style.opacity = "0";
    // headerNav.style.height = "0";
  })
});















