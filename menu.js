const desktop = document.querySelectorAll(".menu__option");
const mobile = document.querySelectorAll(".menu__mobile");


function menu(options) {
    for (const option of options) {
        option.addEventListener("click", () => {
            for (const option of options) {
                option.classList.remove("menu__active");
            }
            option.classList.add("menu__active");
        });
    }
}

menu(desktop);
menu(mobile);