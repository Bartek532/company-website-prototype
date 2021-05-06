import { teamAnimation } from "./team";
import gsap from "gsap";

export const timeline = (
  trigger: string | Element,
  start: string | number,
  end: string | number
) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
    },
  });
};

export const animate = () => {
  teamAnimation();
};
