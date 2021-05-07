const showAllBtn = document.querySelector(".about__btn") as HTMLButtonElement;
const hiddenFeatures = document.querySelectorAll(".feature__hidden");

export const handleShowAllFeatures = () => {
  showAllBtn.addEventListener("click", () => {
    showAllBtn.style.display = "none";
    hiddenFeatures.forEach(hiddenFeature => {
      (hiddenFeature as HTMLElement).style.display = "flex";
    });
  });
};
