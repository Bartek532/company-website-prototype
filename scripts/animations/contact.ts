import { timeline } from ".";

export const contactAnimation = () => {
  return timeline("#contact", "top 70%")
    .addLabel("header")
    .from(".contact__title", {
      y: -200,
      opacity: 0,
      duration: 0.4,
    })
    .from(
      ".contact__description",
      {
        y: 200,
        opacity: 0,
        duration: 0.4,
      },
      "header"
    )
    .from(".contact__form", {
      x: -200,
      opacity: 0,
      duration: 0.4,
    });
};
