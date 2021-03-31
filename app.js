const pokeContainer=document.querySelector(`#container`);

const numOfPokemon=150;

function createPokeCard(pokemon){
    const pokeCard=document.createElement(`div`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for new card using teh data/object that is passed into the "pokemon" parameter.  Also using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
    pokeCard.innerHTML=`
    <div class="img-container"><img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}"></div><h3 class="name">${pokemon.data.name.toUpperCase()}</h3>`
}

// Makes an Axios Get request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function.
async function getPokemonData(id){
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData=await axios.get(url);
    createPokeCard(pokemonData);
}

// Iterates through the first 150 IDs, adding pokemon from each ID.
async function getPokemon(){
    for(i=1;i<=numOfPokemon;i++){
        await getPokemonData(i);
    }
}

getPokemon();