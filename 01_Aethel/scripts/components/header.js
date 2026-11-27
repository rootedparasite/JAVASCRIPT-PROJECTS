import { activateElementOnMouseover } from "../utilities/functions.js";
import { mobileMenuManager } from "./mobileMenu.js";

// This function creates and appends a feature card inside the navbar dropdown.
const renderDropdownFeatureCard = (appendContainerEl, top, center, bottom, btn) => {
  const divEl = document.createElement("div")
  divEl.className = "dropdown-feature__container";

  divEl.innerHTML = `
  <div class="dropdown-feature__wrapper">
    <p class="heading">${top}</p>
    <span>
      <h3>${center}</h3>
      <p>${bottom}</p>
    </span>
    <div>
      <button>${btn} <i class="ti ti-arrow-narrow-right transition-icon"></i></button>
    </div>
  </div>
  `;
  appendContainerEl.appendChild(divEl);
}


// This function creates and appends the dropdown containing child navigation links and a feature card.
const renderNavbarDropdown = (subLinks, parentAppendContainer, cardTopHeading, cardHeading, cardBottomHeading, cardButtonName, dropdownClass, parentName) => {
  const dropdownContainerEl = document.createElement("div");
  dropdownContainerEl.className = `dropdown-categories__container ${dropdownClass}`;

  const dropdownWrapperEl = document.createElement("div");
  dropdownWrapperEl.className = "dropdown-categories__wrapper";

  const headingEl = document.createElement("h2");
  headingEl.className = "main-heading";
  headingEl.textContent = parentName;
  dropdownWrapperEl.appendChild(headingEl)

  const categoriesWrapperEl = document.createElement("ul");
  categoriesWrapperEl.className = "categories-wrapper";
  dropdownWrapperEl.appendChild(categoriesWrapperEl);

  subLinks.forEach(currentLink => {
    const {id, name} = currentLink                                                                                                                                                                                                                                            ;
    const listItemEl = document.createElement("li");
    listItemEl.id = id;
    
    const anchorTagEl = document.createElement("a");
    anchorTagEl.textContent = name;
    anchorTagEl.href = "./category.html";
    listItemEl.appendChild(anchorTagEl)
    
    const iconEl = document.createElement("i");
    iconEl.className = "ti ti-arrow-up-right";
    anchorTagEl.appendChild(iconEl);

    categoriesWrapperEl.appendChild(listItemEl);
  });

  
  renderDropdownFeatureCard(dropdownWrapperEl, cardTopHeading, cardHeading, cardBottomHeading, cardButtonName)
  
  dropdownContainerEl.appendChild(dropdownWrapperEl);
  parentAppendContainer.appendChild(dropdownContainerEl);
}


// This function creates and renders the main navbar links and their dropdowns.
const renderNavbarLinks = (navlinks) => {
  const renderContainerEl = document.querySelector(".navbar-links__wrapper");
  if(!renderContainerEl || !navlinks.length) return;

  navlinks.forEach(currentLink => {
    const { id, name, haveChilds, cardTopHeading, cardHeading, cardBottomHeading, cardButtonName, childLinks} = currentLink;
    const navbarLinkContainerEl = document.createElement("li");
    navbarLinkContainerEl.className = `underline-transition navbar-link activeOnMouseover`;
    navbarLinkContainerEl.setAttribute("data-selector", id);
    
    const navbarLinkEl = document.createElement("a");
    navbarLinkEl.href = "#";
    navbarLinkEl.textContent = name;

    navbarLinkContainerEl.appendChild(navbarLinkEl);

    if(haveChilds) {
      const iconEl = document.createElement("i");
      iconEl.className = "ti parent-carret ti-caret-down";
      navbarLinkEl.appendChild(iconEl);

      renderNavbarDropdown(childLinks, navbarLinkContainerEl, cardTopHeading, cardHeading, cardBottomHeading, cardButtonName, id, name);      
    }

    renderContainerEl.appendChild(navbarLinkContainerEl);
  });

}


// This function manages the header data and starts rendering the navbar.
export const headerManager = (data) => {
  renderNavbarLinks(data[0].navbar_links);
  activateElementOnMouseover();
  mobileMenuManager(data[0].navbar_links);
};