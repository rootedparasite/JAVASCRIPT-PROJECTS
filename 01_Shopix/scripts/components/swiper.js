import Swiper from "https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.mjs";

const swiper = new Swiper(".hero-slider", {
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

var product_swiper = new Swiper(".products-sliderone__container", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".products-slides__arrow--next",
    prevEl: ".products-slides__arrow--prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    630: {
      slidesPerView: 4,
    },
    868: {
      slidesPerView: 5,
    },
  },
});
var product_swiper2 = new Swiper(".products-slidertwo__container", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".products-slides__arrow--next2",
    prevEl: ".products-slides__arrow--prev2",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    630: {
      slidesPerView: 4,
    },
    868: {
      slidesPerView: 5,
    },
  },
});

var product_swiper3 = new Swiper(".products-sliderthree__container", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".products-slides__arrow--next3",
    prevEl: ".products-slides__arrow--prev3",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    630: {
      slidesPerView: 4,
    },
    868: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});