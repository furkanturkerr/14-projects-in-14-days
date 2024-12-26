const ac = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input")

ac.addEventListener("click", () =>{
    search.classList.toggle("active");
    input.focus()
})