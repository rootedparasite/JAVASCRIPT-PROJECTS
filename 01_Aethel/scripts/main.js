import { toggleBodyScroll } from "./utilities/functions.js";

// * This function hide loading screen and enable body scroll 
const hideLoadingScreen = () => {
  const loadingScreenEl = document.querySelector(".loading-screen");
  const progressBarEl = document.querySelector(".loading-screen__progress-bar");
  const loadingPercentageEl = document.querySelector(".loading-screen__percentage");
  if(!loadingScreenEl || !progressBarEl || !loadingPercentageEl) return;
  
  let loadingCount = 0;

  let interval = setInterval(() => {
    loadingPercentageEl.textContent = `${loadingCount += Math.floor(Math.random() * 3) + 1}%`
    progressBarEl.style.width = `${loadingCount}%`;
    
    if(loadingCount >= 98) {
      loadingPercentageEl.textContent = "98%"
      progressBarEl.style.width = `98%`;
      clearInterval(interval);
    }
  }, 10)
  
  setTimeout(() => {
    loadingPercentageEl.textContent = "100%"
    progressBarEl.style.width = `100%`;
    loadingScreenEl.classList.add("active");
    toggleBodyScroll(false);
  }, 1200);
}

(async() => {
  hideLoadingScreen();
})();