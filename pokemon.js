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
const pokemonName = 'pikachu'; // Replace this with the desired Pokemon name
let pokemonCard = document.querySelector('.pokemon-name')
let pokemonWeight = document.querySelector('.pokemon-weight')
let pokemonHeight = document.querySelector('.pokemon-height')
let pokemonSprite = document.querySelector('.pokemon-image')
let pokemonAbilities = document.querySelector('.pokemon-abilities')


// Function execution
fetchPokemonData(pokemonName)
.then((pokemonData) => {
    console.log('Pokemon Data:', pokemonData);
    console.log('pokemon name ' , pokemonData.name)
    pokemonCard.innerHTML = pokemonData.name
    pokemonWeight.innerHTML = pokemonData.weight
    pokemonHeight.innerHTML = pokemonData.height
    pokemonSprite.src = pokemonData.sprites.front_default
    for (let i=0;i<pokemonData.abilities.length;i++) {
        
        console.log(pokemonData.abilities[i].ability.name)
    // pokemonAbilities.innerHTML = pokemonData.abilities[i].ability.name

    var element = document.createElement('p');

            // Set some content for the element
            element.textContent = pokemonData.abilities[i].ability.name;

            // Append the element to the container
            pokemonAbilities.appendChild(element);
        }


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