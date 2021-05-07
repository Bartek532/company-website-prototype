import { timeline } from ".";

export const buildAnimation = () => {
  return timeline("#services", "top 80%", "+=100px")
    .from("#services .description", {
      x: -400,
      opacity: 0,
      duration: 0.5,
    })
    .from(".build #window", {
      y: -300,
      opacity: 0,
      duration: 0.4,
    })
    .addLabel("tabs")
    .from(".build #tabs g", {
      scale: 0,
      transformOrigin: "50% 50%",
      stagger: 0.15,
      duration: 0.4,
    })
    .from(".build #squares path", {
      scale: 0,
      transformOrigin: "50% 50%",
      stagger: 0.15,
      duration: 0.3,
    })
    .from(".build #person1", {
      opacity: 0,
      zIndex: -1,
      x: 300,
      duration: 0.5,
    })
    .from(".build #person3", {
      opacity: 0,
      x: 300,
      duration: 0.4,
    })
    .from(".build #person2", {
      y: 300,
      opacity: 0,
      duration: 0.4,
    });
};
