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
        <div class="hero-headings__container">
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

export const homePageManager = (data) => {
  renderHeroBanners(data[0].herobanners);
};