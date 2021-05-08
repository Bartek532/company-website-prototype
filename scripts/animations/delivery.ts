import { timeline } from ".";

export const deliveryAnimation = () => {
  return timeline("#social", "top 50%", "+=200px")
    .from("#social .description", {
      x: 400,
      opacity: 0,
      duration: 0.5,
    })
    .addLabel("floor")
    .from("#box", {
      y: -650,
      opacity: 0,
      stagger: 0.15,
      duration: 0.3,
    })
    .from(
      "#floor",
      {
        transformOrigin: "50% 50%",
        scale: 0,
        duration: 0.4,
      },
      "floor"
    )
    .from(".delivery #person", {
      opacity: 0,
      y: -400,
      duration: 0.4,
    })
    .from("#stalks path", {
      transformOrigin: "50% 100%",
      scaleY: 0,
      stagger: 0.1,
      duration: 0.25,
    })
    .from("#flower", {
      transformOrigin: "50% 100%",
      scale: 0,
      stagger: 0.1,
      duration: 0.25,
    });
};
