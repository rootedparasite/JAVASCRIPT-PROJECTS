import { addCommonClass } from "../utilities/functions.js";


// * This function Render Children Categories   
const receiveRequestForRenderSubCategories = (subCategories, parentCategoryEl, subCategoryClass) => {
  const subCategoriesContainerEl = document.createElement("ul");
  subCategoriesContainerEl.className = `sidemenu-subcategories__list ${subCategoryClass}`;

  subCategories.forEach(subCategory => {
    const listItemEl = document.createElement("li");
    listItemEl.id = subCategory.id

    const anchorTagEl = document.createElement("a");
    anchorTagEl.className = "underline-transition";
    anchorTagEl.textContent = subCategory.name;
    anchorTagEl.href = subCategory.link;
    listItemEl.appendChild(anchorTagEl);

    subCategoriesContainerEl.appendChild(listItemEl);

  });
  parentCategoryEl.appendChild(subCategoriesContainerEl);
}

//* This function render categories on a sidemenu
const sendRequestForRenderSubCategories = (categories) => {
  const categoriesContainerEl = document.querySelector(".sidemenu-categories__list");
  if(!categoriesContainerEl) return;
  categories.forEach(currentCategory => {
    const listItemEl = document.createElement("li");
    listItemEl.className = "sidemenu-parent__category sidemenu";
    listItemEl.id = currentCategory.id;

    const headingContainerEl = document.createElement("div");
    headingContainerEl.className = "sidemenu-category__headings";
    headingContainerEl.setAttribute("data-selector", currentCategory.id);

    const paragraphEl = document.createElement("p");
    paragraphEl.textContent = currentCategory.name;
    headingContainerEl.appendChild(paragraphEl);
    
    listItemEl.appendChild(headingContainerEl);

    if(currentCategory.haveChilds) {
      const iconEl = document.createElement("i");
      iconEl.className = "ti ti-caret-right sidemenu-icon";
      headingContainerEl.appendChild(iconEl);
      headingContainerEl.classList.add("sidemenu-category__target")
      receiveRequestForRenderSubCategories(currentCategory.subcategories, listItemEl, currentCategory.id)
    }

    categoriesContainerEl.appendChild(listItemEl);
  });
};


export const sidemenuManager = (data) => {
  sendRequestForRenderSubCategories(data[0].categories);
  toggleDropdownCategories();
  addCommonClass()
}