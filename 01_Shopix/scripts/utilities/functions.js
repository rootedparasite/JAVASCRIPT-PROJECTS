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

/* This function disables elements on outside window click */

const deactivateOnWindowClick = () => {
  const elements = document.querySelectorAll(".deactivateOnWindowClick");
  if (!elements.length) return;

  window.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;

    elements.forEach(targetEl => {
      const selector = targetEl.getAttribute("data-selector");
      if (!selector) return;

      const selectorEl = document.querySelector(`.${CSS.escape(selector)}`);
      if (!selectorEl) return;

      const isInsideElement =
        selectorEl.contains(e.target) ||
        targetEl.contains(e.target);

      if (isInsideElement) return;
      selectorEl.classList.remove("active");
    });

    const isScrollDisabled = [...document.querySelectorAll(".activateOnClick")].some(targetEl => {
        const shouldDisable =targetEl.getAttribute("data-bodyScrollDisabled") === "true";
        if (!shouldDisable) return false;

        const selector = targetEl.getAttribute("data-selector");
        if (!selector) return false;

        const selectorEl = document.querySelector(`.${CSS.escape(selector)}`);
        return selectorEl?.classList.contains("active");
      });
    toggleBodyScroll(isScrollDisabled);
  }, true);
}; deactivateOnWindowClick();



// * This function Make Show Password Button Functional 
const showPassword = () => {
  const elements = document.querySelectorAll(".showInputPassword");
  if(!elements.length) return;

  elements.forEach(element => {
    const iconEl = element.querySelector("i");
    const inputEl = element.querySelector("input");
    const buttonEl = element.querySelector("button");
    if(!iconEl || !inputEl || !buttonEl) return;
    buttonEl.addEventListener("click", () => {
      if(inputEl.type === "text") {
        iconEl.classList.replace("ti-eye", "ti-eye-off"); 
        inputEl.type = "password";
      } else {
        iconEl.classList.replace("ti-eye-off", "ti-eye");
        inputEl.type = "text";
      }
    });
  });
}; showPassword();

// * This function stop propagation of parent listener to its child
const stopPropagationForChilds = () => {
  const elements = document.querySelectorAll(".stopPropagation");
  if(!elements.length) return;

  elements.forEach(element => element.addEventListener("click", (e) => e.stopPropagation()));
}; stopPropagationForChilds();

//* Tihs function activate Element On Scroll
const activateOnScroll = () => {
  const elements = document.querySelectorAll(".activeOnScroll");
  if(!elements.length) return;

  elements.forEach(element => {
    const SCROLL_THRESHOLD = parseInt(element.getAttribute("data-scrollThreshold")) || 10;
    window.addEventListener("scroll", () => {
      if(SCROLL_THRESHOLD && !isNaN(SCROLL_THRESHOLD)) {
        window.scrollY > SCROLL_THRESHOLD ? element.classList.add("active") : element.classList.remove("active");
      }
    })
  })
}; activateOnScroll();