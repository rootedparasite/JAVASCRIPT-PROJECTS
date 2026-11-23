import { headerManager } from "./components/header.js";
import { addCommonClass, toggleBodyScroll } from "./utilities/functions.js";

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

( async ()=> {
  hideLoadingScreen();
  try {
    const response = await fetch("./scripts/core/data.json");
    if(!response.ok) throw new Error("Unable to fetch data from API. Something went wrong with your API File please check and try again later. ")
    const data = await response.json();
    headerManager(data)

  } catch(err) {
    console.error(err)
  }
  addCommonClass();
})();