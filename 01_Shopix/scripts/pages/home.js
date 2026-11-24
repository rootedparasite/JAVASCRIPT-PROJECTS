import { activeElementOnMouseOver, addIntersecterTransition } from "../utilities/functions.js";

const renderHeroBanners = (heroData) => {
  const renderParentContainerEl = document.querySelector(".hero-slider__wrapper");
  if(!renderParentContainerEl) return;
  
  heroData.forEach(currentBanner => {
    const divEl = document.createElement("div");
    divEl.className = "swiper-slide hero-slide";
    divEl.id = currentBanner.id;

    divEl.innerHTML = `
      <div class="hero-banner__container">
        <div class="hero-image__container"><img src="${currentBanner.img}" alt=""></div>
        <div class="hero-headings__container addIntersecterTransition">
          <p class="hero-top__heading">${currentBanner.top_heading}</p>
          <h2 class="hero-main__heading">${currentBanner.main_header}</h2>
          <h4 class="hero-sub__heading">${currentBanner.bottom_heading}</h4>
          <button class="hero-button">${currentBanner.button_name}</button>
        </div>
      </div>
    `;
    renderParentContainerEl.appendChild(divEl)
  });
};

const recieveReqForRenderSubCategories = (parentCategoryEl, subcategories, parentCategoryName, parentID) => {
  if(!subcategories.length) return;
  const subCategoriesContainerEl = document.createElement("div");
  subCategoriesContainerEl.className = `hero-subcategory__container ${parentID}-hero`;

  const subCategoriesWrapperEl = document.createElement("ul");
  subCategoriesWrapperEl.className = "hero-subcategories__wrapper";

  const headingContainerEl = document.createElement("li");
  const headingEl = document.createElement("h2");
  headingEl.className = "hero-subcategory__title";
  headingEl.textContent = parentCategoryName;
  headingContainerEl.appendChild(headingEl);
  subCategoriesWrapperEl.appendChild(headingContainerEl);
  
  subcategories.forEach(category => {
    const { id, name, link } = category;

    const subCategoryListEl = document.createElement("li");
    subCategoryListEl.className = "hero-sub__category";

    const anchorEl = document.createElement("a");
    anchorEl.className = "underline-transition"
    anchorEl.href = link;
    anchorEl.alt = name;
    anchorEl.textContent = name;
    subCategoryListEl.appendChild(anchorEl);

    subCategoriesWrapperEl.appendChild(subCategoryListEl)


  })
  subCategoriesContainerEl.appendChild(subCategoriesWrapperEl);
  parentCategoryEl.appendChild(subCategoriesContainerEl);
};

const sendRequestForRenderSubCategories = (categories) => {
  const categoryContainerEl = document.querySelector(".hero-categories__parentContainer");
  if(!categoryContainerEl) return;

  categories.forEach(parentCategory => {
    const { id, name, haveChilds, img, subcategories } = parentCategory;
    const parentCategoryEl = document.createElement("li");
    parentCategoryEl.className = `hero-category__container activeOnHover`;
    parentCategoryEl.setAttribute("data-selector", `${id}-hero`);
    parentCategoryEl.id = id;

    const parentCategoryHeadingContainerEl = document.createElement("div");
    parentCategoryHeadingContainerEl.className = "hero-category__name";
    parentCategoryEl.appendChild(parentCategoryHeadingContainerEl);
    
    const categoryImgEl = document.createElement("img");
    categoryImgEl.src = img
    categoryImgEl.alt = name;
    parentCategoryHeadingContainerEl.appendChild(categoryImgEl);
    const headingNameEl = document.createElement("h3");
    headingNameEl.textContent = name;
    parentCategoryHeadingContainerEl.appendChild(headingNameEl);
    if(haveChilds) {
      recieveReqForRenderSubCategories(parentCategoryEl, subcategories, name, id);
    }
    categoryContainerEl.appendChild(parentCategoryEl);



  });
  

}


export const homePageManager = (data) => {
  renderHeroBanners(data[0].herobanners);
  addIntersecterTransition();
  sendRequestForRenderSubCategories(data[0].categories);
  activeElementOnMouseOver();
};