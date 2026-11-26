//* This function enable or disable body scroll on requirement
export const toggleBodyScroll = isDisabled => isDisabled ? document.body.classList.add("disable-scroll") : document.body.classList.remove("disable-scroll");

//* This function active Elements on mouseenter and deactivate on mouseout
export const activateElementOnMouseover = () => {
  const elements = document.querySelectorAll(".activeOnMouseover");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    console.log(selectorEl)
    if(!selectorEl) return;

    targetEl.addEventListener("mouseover", () => selectorEl.classList.add("active"));
    targetEl.addEventListener("mouseout", () => selectorEl.classList.remove("active"));
  })
}; 