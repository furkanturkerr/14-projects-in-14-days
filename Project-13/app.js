const active = document.querySelector("#active");
const button = document.getElementById("taggle");

button.addEventListener("click", () => {
    active.classList.toggle("active");
});