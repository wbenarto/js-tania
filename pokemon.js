console.log("Welcome to my pokemon project")

// Function to fetch Pokemon data by name
async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

        // If the response is not okay, throw an error Pokemon not found
        // response.ok == false
        // !response.ok 
        if (!response.ok) {
        throw new Error('Pokemon not found!');
        }

        // convert the response into json object
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

// Usage example
const pokemonName = 'charmander'; // Replace this with the desired Pokemon name
let pokemonCard = document.querySelector('.pokemon-name')
let pokemonWeight = document.querySelector('.pokemon-weight')
let pokemonHeight = document.querySelector('.pokemon-height')
let pokemonSprite = document.querySelector('.pokemon-image')

// Function execution
fetchPokemonData(pokemonName)
.then((pokemonData) => {
    console.log('Pokemon Data:', pokemonData);
    console.log('pokemon name ' , pokemonData.name)
    pokemonCard.innerHTML = pokemonData.name
    pokemonWeight.innerHTML = pokemonData.weight
    pokemonHeight.innerHTML = pokemonData.height
    pokemonSprite.src = pokemonData.sprites.front_default


    // Do whatever you want with the retrieved data here
})
.catch((error) => {
    console.error('Error:', error.message);
});

// 2nd fetch on evee
fetchPokemonData('eevee')
.then((pokemonData) => {
    console.log('Second pokemon data: ' , pokemonData)
})
.catch((err) => {
    console.error(err)
})





// Try and Catch block
// try {

// } catch (err) {
//     console.error(err)
// }