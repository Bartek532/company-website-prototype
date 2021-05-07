import gsap from "gsap";

export const startAnimation = () => {
  const tl = gsap.timeline();

  return tl
    .from(".menu", {
      opacity: 0,
      x: 300,
      duration: 0.5,
    })
    .addLabel("start")
    .from(".home__title", {
      opacity: 0,
      y: -100,
      duration: 0.3,
    })
    .from(
      ".home__description",
      {
        opacity: 0,
        y: 100,
        duration: 0.3,
      },
      "start"
    )
    .addLabel("button")
    .from(".first .circle", {
      scale: 0,
      transformOrigin: "50% 50%",
      stagger: Number("." + Math.floor(Math.random() * 5)),
      duration: 0.4,
    })
    .from(
      ".btn--purple",
      {
        opacity: 0,
        x: 50,
        duration: 0.2,
        ease: "easeOut",
      },
      "button"
    )
    .from(
      ".btn--green",
      {
        opacity: 0,
        x: -50,
        duration: 0.2,
        ease: "easeOut",
      },
      "button"
    );
};
