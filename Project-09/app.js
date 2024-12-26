const sounds = ['09', '1', '10', '2', '3'];

sounds.forEach((sound) =>{
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click", () =>{
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSongs(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0
    })
}