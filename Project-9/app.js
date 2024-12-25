const sounds = ['09', '1', '10', '2', '3'];

sounds.forEach((sound) =>{
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    document.getElementById("buttons").appendChild(btn)
})