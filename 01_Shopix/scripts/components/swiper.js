
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.mjs";

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
