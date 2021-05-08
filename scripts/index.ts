import { handleMenu } from "./menu";
import { handleAnimate } from "./animations";
import { handleShowAllFeatures } from "./features";
import { handleNewsletter } from "./newsletter";

(document.querySelector(
  ".copyright-date"
) as HTMLElement).innerText = new Date().getFullYear().toString();

handleMenu();
handleAnimate();
handleShowAllFeatures();
handleNewsletter();
