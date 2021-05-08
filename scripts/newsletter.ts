const newsletterForm = document.querySelector(".contact__form");
const newsletterWarning = document.querySelector(
  ".contact__form__error"
) as HTMLElement;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const handleNewsletter = () => {
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const formElements = (e.target as HTMLFormElement).elements;
    const emailValue = (formElements[0] as HTMLInputElement).value;

    if (!emailValue || !EMAIL_REGEX.test(emailValue)) {
      newsletterWarning.style.display = "block";
    } else {
      newsletterWarning.style.display = "none";
      (e.target as HTMLFormElement).reset();
    }
  });
};
