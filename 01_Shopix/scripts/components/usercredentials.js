const changeInputPlaceholder = (elementClass, placeholderText) => {
  const element = document.querySelector(`.${elementClass}`);
  if(!element) return;
  element.setAttribute("placeholder", placeholderText);
}

const addClassInElement = (elementClass, addon, isAdd) => {
  const element = document.querySelector(`.${elementClass}`);
  if(!element) return;
  isAdd ? element.classList.add(addon) : element.classList.remove(addon);
};

const changeText = (textClass, text) => {
  const element = document.querySelector(`.${textClass}`);
  if(!element) return;
  element.textContent = text;
};

const hideSignupElements = (isHide) => {
  const elements = document.querySelectorAll(".signupElement");
  if(!elements.length) return;
  elements.forEach(element => isHide ? element.classList.add("hideElement") : element.classList.remove("hideElement"));
  if(isHide) {
    changeText("UC-tagline", "Welcome Back to our community");
    changeText("UC-heading", "Login An Account");
    changeText("UC-description", "Get started by Login your account. It only takes a minute.");
    changeText("UC-footer__text", "Don't have an account? ");
    changeText("UC-footer__btn", "Sign Up");
    changeText("UC-submit__button", "Log In");
    addClassInElement("UC-footer__btn", "signupBtnElem", true);
    changeInputPlaceholder("UC-password__input", "Enter Your Password");
  } else {
    changeText("UC-tagline", "JOIN OUR COMMUNITY");
    changeText("UC-heading", "Create an Account");
    changeText("UC-description", "Get started by creating your account. It only takes a minute..");
    changeText("UC-footer__text", "Already have an account? ");
    changeText("UC-footer__btn", "Sign In");
    changeText("UC-submit__button", "Create Account");
    addClassInElement("UC-footer__btn", "signupBtnElem", false);
    changeInputPlaceholder("UC-password__input", "Create Your Password");
  }
};

const clickHandler = () => {
  const elements = document.querySelectorAll(".user-credential__btn");
  if(!elements.length) return;

  elements.forEach(element => {
    element.addEventListener("click", () => {
      if(element.classList.contains("signupBtnElem")) {
        hideSignupElements(false);
      } else {
        hideSignupElements(true);
      }
    })
  })
};

export const userCredentialsManager = () => {
  clickHandler();
  hideSignupElements(false);
};