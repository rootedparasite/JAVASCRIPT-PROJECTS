import { toggleBodyScroll } from "./utilities/functions.js";

// * This function hide loading screen
const hideLoadingScreen = () => {
  const loadingEl = document.querySelector(".loading-screen");
  if(!loadingEl) return;
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      loadingEl.classList.add("active");
      toggleBodyScroll(false);
    }, 300);
  });
};

(() => {
  hideLoadingScreen();
})();