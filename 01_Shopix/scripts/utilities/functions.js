// * This function toggle body scroll by receiving boolean value during function invocation
export const toggleBodyScroll = (isDisable) => {
  const bodyEl = document.body;

  if(isDisable) {
    bodyEl.classList.add("disable-scroll");
  } else  {
    bodyEl.classList.remove("disable-scroll");
  }
};

// * This functions add common classes on all elements present on a selector
const addClassOnBulk = (selector, commonClass) => {
  selector.classList.add(commonClass);
  selector.querySelectorAll("*").forEach(currentElement => {
    if(currentElement instanceof HTMLAnchorElement) return ;
    currentElement.classList.add(commonClass);
  })
}

export const addCommonClass = () => {
  const elements = document.querySelectorAll(".addCommonClasses");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    const commonClass = targetEl.getAttribute("data-commonClass");
    if(!selectorEl || !commonClass) return;
    addClassOnBulk(selectorEl, commonClass);
    addClassOnBulk(targetEl, commonClass);
  });
}; addCommonClass();

//* This function activate element with body scroll disable on requirement 
const activateElementOnClick = () => {
  const elements = document.querySelectorAll(".activateOnClick");
  if(!elements.length) return;
  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    if(!selectorEl) return;

    const isBodyScrollDisabled = targetEl.getAttribute("data-bodyScrollDisabled") === "true";
    targetEl.addEventListener("click", () => {
      selectorEl.classList.add("active");
      toggleBodyScroll(isBodyScrollDisabled);
    });
  });
}; activateElementOnClick();

//* This function disable element with body scroll eneable on requirement 
const deactivateElementOnClick = () => {
  const elements = document.querySelectorAll(".deactiveElementOnClick");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    if(!selectorEl) return;

    targetEl.addEventListener("click", () => {
      selectorEl.classList.remove("active");
      toggleBodyScroll(false);
    });
  })
}; deactivateElementOnClick();

// * This function disable element on window click 
const deactivateOnWindowClick = () => {
  const elements = document.querySelectorAll(".deactivateOnWindowClick");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    const commonClass = targetEl.getAttribute("data-commonClass");
    if(!selectorEl || !commonClass) return;

    window.addEventListener("click", (e) => {
      if(!e.target.classList.contains(commonClass)) {
        selectorEl.classList.remove("active");
        toggleBodyScroll(false);
      }
    });
  });
}; deactivateOnWindowClick();
