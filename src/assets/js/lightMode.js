const html = document.querySelector("html");
const checkbox = document.querySelector("#light-mode");

checkbox.addEventListener("change", function () {
    html.classList.toggle("light-mode");
})
