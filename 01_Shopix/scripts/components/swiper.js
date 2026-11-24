
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.mjs";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".heroswiper-button-next",
    prevEl: ".heroswiper-button-prev",
  },
});