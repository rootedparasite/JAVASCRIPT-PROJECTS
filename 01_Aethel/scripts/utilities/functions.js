//* This function enable or disable body scroll on requirement
export const toggleBodyScroll = isDisabled => isDisabled ? document.body.classList.add("disable-scroll") : document.body.classList.remove("disable-scroll");

//* This function active Elements on mouseenter and deactivate on mouseout
export const activateElementOnMouseover = () => {
  const elements = document.querySelectorAll(".activeOnMouseover");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    if(!selectorEl) return;

    targetEl.addEventListener("mouseover", () => selectorEl.classList.add("active"));
    targetEl.addEventListener("mouseout", () => selectorEl.classList.remove("active"));
  })
}; 

//* This function activate Element on Scroll
const activateElementOnScroll = () => {
  const elements = document.querySelectorAll(".activeOnScroll");
  if(!elements.length) return;

  elements.forEach(selector => {
    const SCROLL_THRESHOLD = Math.ceil(parseInt(selector.getAttribute("data-scroll"))) || 10;
    window.addEventListener("scroll", () => window.scrollY >= SCROLL_THRESHOLD ? selector.classList.add("active") : selector.classList.remove("active"));
  })
}; activateElementOnScroll();

//* This function activate Element On Click 
const activeElementOnClick = () => {
  const elements = document.querySelectorAll(".activateOnClick");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-active")}`);
    if(!selectorEl) return;

    targetEl.addEventListener("click", () => selectorEl.classList.add("active"));
  })
};