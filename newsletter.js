const newsletter = document.querySelector('#email');
const warning = document.querySelector('.warning');
const sendButton = document.querySelector('.send');

newsletter.addEventListener("input", () => {
    warning.style.display = "none";
})
sendButton.addEventListener("click", () => {
    if (!newsletter.value.match(/@./)) warning.style.display = "block";
    newsletter.value = "";
})