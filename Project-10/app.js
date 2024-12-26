const jokeEl = document.getElementById('jake')
const jokeBtn = document.getElementById('jakeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// async
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json() // await anahtar kelimesi ile, promise'in çözülmesini (verinin gelmesini) bekleriz.

    jokeEl.innerHTML = data.joke
}

// then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }