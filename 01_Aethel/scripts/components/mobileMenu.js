const toggleMobileMenu = () => {
  const menuButtonEl = document.querySelector("#open-sidemenu__btn");
  const buttonIconEl = menuButtonEl.querySelector("i");
  const menuEl = document.querySelector(".menu-container");
  if(!menuButtonEl || !menuEl || !buttonIconEl) return;
  
  menuButtonEl.addEventListener("click", () => {
    if(!menuEl.classList.contains("active")) {
      buttonIconEl.className = "ti ti-x";
      menuEl.classList.add("active");
    } else {
      buttonIconEl.className = "ti ti-menu-3";
      menuEl.classList.remove("active");
    }
  })
};

const closePreviousAllMenu = (elements) => {
  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    if(!selectorEl) return;
    selectorEl.classList.remove("active");
  })
}

const activeDropdownMenu = () => {
  const elements = document.querySelectorAll(".dropdownActivator");
  if(!elements.length) return;

  elements.forEach(targetEl => {
    const selectorEl = document.querySelector(`.${targetEl.getAttribute("data-selector")}`);
    if(!selectorEl) return
    targetEl.addEventListener("click", () => {
      if(selectorEl.classList.contains("active")) {
        selectorEl.classList.remove("active");
      } else {
        closePreviousAllMenu(elements);
        selectorEl.classList.add("active");
      }               
    });
  });
};

const renderdropdownMenuLinks = (data, appendContainerEl) => {
  const dropdownContainerEl = document.createElement("div");
  dropdownContainerEl.className = "menu-subcategories";

  const dropdownWrapperEl = document.createElement("div");
  dropdownWrapperEl.classList = "menu-subcategories-inner";

  let count = 20;

  data.forEach(currentLink => {
    const {id, name} = currentLink;
    const anchorTagEl = document.createElement("a");
    anchorTagEl.href = "./category.html";
    anchorTagEl.textContent = name;
    anchorTagEl.setAttribute("id", `${id}menu`);
    anchorTagEl.style.animationDelay = `${count += 20}ms`;

    dropdownWrapperEl.appendChild(anchorTagEl);
  });

  dropdownContainerEl.appendChild(dropdownWrapperEl);
  appendContainerEl.appendChild(dropdownContainerEl);
}

const renderMobileMenuLink = (data) => {
  const linkContainerEl = document.querySelector(".menu-categories")
  if(!linkContainerEl) return;

  data.forEach(currentLink => {
    const {id, name, haveChilds, childLinks} = currentLink;
    
    const parentListItemEl = document.createElement("li");
    parentListItemEl.className = `menu-category ${id}menu`;
    parentListItemEl.setAttribute("id", id);

    const parentLinkBtnEl = document.createElement("button");
    parentLinkBtnEl.className = "menu-category__trigger";
    parentLinkBtnEl.setAttribute("data-selector", `${id}menu`);

    const spanEl = document.createElement("span");
    spanEl.textContent = name;
    parentLinkBtnEl.appendChild(spanEl);

    const iconEl = document.createElement("i");

    parentListItemEl.appendChild(parentLinkBtnEl);

    if(haveChilds) {
      iconEl.className = "ti ti-chevron-down";
      renderdropdownMenuLinks(childLinks, parentListItemEl);
      parentLinkBtnEl.classList.add("dropdownActivator")
    } else {
      iconEl.className = "ti ti-arrow-up-right";
    }
    parentLinkBtnEl.appendChild(iconEl);
    linkContainerEl.appendChild(parentListItemEl);
  });
}

export const mobileMenuManager = (data) => {
  renderMobileMenuLink(data);
  activeDropdownMenu();
  toggleMobileMenu();
} 