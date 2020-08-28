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

function keyboardFocus(e) {
    if (e.keyCode === 9) { // Tab key
        document.documentElement.classList.add('keyboard-focus');
    }

    document.removeEventListener('keydown', keyboardFocus, false);
}

document.documentElement.classList.remove('no-js');
document.addEventListener('keydown', keyboardFocus, false);