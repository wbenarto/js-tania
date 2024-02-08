console.log("Welcome to my pokemon project")

// Function to fetch Pokemon data by name
async function fetchPokemonData() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        // If the response is not okay, throw an error Pokemon not found
    
        if (!response.ok) {
            throw new Error('Pokemon not found!');
        }

        // convert the response into json object
        const pokemonData = await response.json();
        console.log('Pokemon Data:', pokemonData);
        console.log('pokemon name ' , pokemonData.name)
    
        // Built in functions in JS to uppercase first letter
        const pokemonName = pokemonData.name
        const firstLetter = pokemonName.charAt(0).toUpperCase()
        const remainingLetters = pokemonName.slice(1)
    
    
        pokemonCard.innerHTML = firstLetter + remainingLetters
        pokemonWeight.innerHTML = pokemonData.weight
        pokemonHeight.innerHTML = pokemonData.height
        pokemonHp.innerHTML = pokemonData.stats[0].base_stat
        pokemonAttack.innerHTML = pokemonData.stats[1].base_stat
        pokemonDefense.innerHTML = pokemonData.stats[2].base_stat
        pokemonElement.innerHTML = pokemonData.types[0].type.name
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
    
            // Trying to change the color of the background card everytime we press the search button.
            // Set up what colors is going to be displayed
            // Grab the colors to link (randomize)
            // Change the background color

            let colors= ["red",  "orange", "yellow", "green"]
            let background= document.getElementsByClassName('pokemon-card-header')[0]
            let randomNum= Math.floor(Math.random() * colors.length)
            colors[randomNum]
            background.style.backgroundColor= colors[randomNum]
            background.style.color= "pink"

        // Do whatever you want with the retrieved data here
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Usage example
const pokemonName = 'pikachu'; // Replace this with the desired Pokemon name
let pokemonCard = document.querySelector('.pokemon-name')
let pokemonWeight = document.querySelector('#pokemon-weight')
let pokemonHeight = document.querySelector('#pokemon-height')
let pokemonSprite = document.querySelector('.pokemon-image')
let pokemonAbilities = document.querySelector('#pokemon-abilities')
let pokemonHp = document.querySelector('#pokemon-hp')
let pokemonAttack = document.querySelector('#pokemon-attack')
let pokemonDefense = document.querySelector('#pokemon-defense')
let pokemonElement = document.querySelector('#pokemon-element')
document.getElementById('searchButton').addEventListener('click', fetchPokemonData)

console.log(document.getElementsByClassName)(pokemon-card-header)
// Function execution

