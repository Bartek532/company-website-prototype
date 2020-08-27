const all = document.querySelector(".all");
const features__hide = document.querySelectorAll(".feature__hide");
all.addEventListener("click", () => {
    all.style.display = "none";
    for (const feature of features__hide) {
        feature.style.display = "flex";
        tl.from(feature, 0.3, {
            opacity: 0,
            y: 200,
            stagger: 0.1,
            ease: "easeOut",
        });
    }
});