import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const sectionsIdentifiers = ["home", "about", "services", "social", "contact"];

export const handleMenu = () => {
  sectionsIdentifiers.forEach(identifier => {
    const activeSection = document.querySelector(`#${identifier}`);
    const activeLink = document.querySelector(
      `a[href="#${identifier}"][class^="menu"]`
    );

    gsap.to(activeLink, {
      scrollTrigger: {
        trigger: activeSection,
        start: "top 50%",
        end: "bottom center",
        onToggle: ({ progress, direction, isActive }) => {
          isActive
            ? activeLink.classList.add("menu__option--active")
            : activeLink.classList.remove("menu__option--active");
        },
      },
    });
  });
};
