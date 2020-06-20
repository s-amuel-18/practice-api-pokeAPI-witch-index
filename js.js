const inputToPokemon = document.getElementById(`inputToPokemon`)
const buttonToPokemon = document.getElementById(`botonSolicitarPokemon`)
const bodye = document.getElementById(`bodye`)


function renderPokemon(image) {
    pokemon.setAttribute(`src`, image)
}

fetch(`https://pokeapi.co/api/v2/pokemon/25`)
    .then(response => response.json())
    .then(data => {
        renderPokemon(data.sprites.front_default)
        console.log(data.sprites)
    })

buttonToPokemon.addEventListener(`click`, e => {
    e.preventDefault()

    let pokemonBuscado = inputToPokemon.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data.name)
            let urlImagePoke = data.sprites.front_default
            renderPokemon(urlImagePoke)
            bodye.style.backgroundImage = `url(${urlImagePoke})`
        })
        .catch(e => {
            document.querySelector(`.contentError`).style.display = `block`
            setTimeout(()=>{
                document.querySelector(`.contentError`).style.display = `none`
            },3000)
        })
})


window.addEventListener(`DOMContentLoaded`,()=>{
    bodye.style.backgroundImage = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)`
    inputToPokemon.style.display = `block`
    buttonToPokemon.style.display = `block`
    pokemon.style.display = `block`
    preloader.style.display = `none`
})
