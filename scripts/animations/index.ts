import { teamAnimation } from "./team";
import { startAnimation } from "./start";
import { buildAnimation } from "./build";
import { deliveryAnimation } from "./delivery";
import { aboutAnimation } from "./about";
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

export const handleAnimate = () => {
  startAnimation();
  teamAnimation();
  aboutAnimation();
  buildAnimation();
  deliveryAnimation();
};
