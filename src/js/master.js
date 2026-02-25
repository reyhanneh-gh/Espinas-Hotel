// ----------------------slider------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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