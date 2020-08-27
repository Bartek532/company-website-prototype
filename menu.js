const options = document.querySelectorAll(".menu__option");
for (const option of options) {
    option.addEventListener("click", () => {
        for (const option of options) {
            option.classList.remove("menu__option__active");
        }
        option.classList.add("menu__option__active");
    });
}

const wrapper = document.querySelector(".wrapper");
const menu = document.querySelector(".menu");
wrapper.addEventListener("click", () => {
    wrapper.classList.toggle("active");
    menu.classList.toggle("active-menu");
});