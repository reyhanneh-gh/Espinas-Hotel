// ----------------------slider------------------------
var swiper = new Swiper(".firstSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }
});

var swiper = new Swiper(".secondSlider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ------------large screen side menu---------------
let menuBtn = document.getElementById("menu")
let sideMenu = document.querySelectorAll(".sideMenu")
let closeBtn = document.querySelectorAll(".closeBtn")

menuBtn.addEventListener("click", () => {
  sideMenu.forEach(val => {
    val.style.right = "0"
    val.style.transition = "0.4s"
  })
})

closeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    sideMenu.forEach(val => {
      val.style.right = "-100%"
      val.style.transition = "0.4s"
    })
  })
})