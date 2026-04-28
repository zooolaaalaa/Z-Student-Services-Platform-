// AOS
AOS.init({ duration: 1200 });

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: { delay: 3000 },
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
