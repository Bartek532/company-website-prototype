import { timeline } from ".";

export const aboutAnimation = () => {
  return timeline(".about", "top 50%", "+=100px")
    .addLabel("header")
    .from(".header__title", {
      y: -70,
      opacity: 0,
      duration: 0.3,
    })
    .from(
      ".header__description",
      {
        opacity: 0,
        y: 70,
        duration: 0.3,
      },
      "header"
    )
    .from(".features", {
      opacity: 0,
      y: 200,
      ease: "easeOut",
      duration: 0.3,
    })
    .from(".about__btn", {
      opacity: 0,
      x: 50,
      duration: 0.2,
    });
};
