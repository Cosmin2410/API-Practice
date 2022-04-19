const pokeContainer = document.querySelector('.card-container');
const pokemonNumber = 100;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNumber; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  createPokemonCard(data);
};

function createPokemonCard(data) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList = 'card';
  const firstLetterUppercase = data.name[0].toUpperCase() + data.name.slice(1);

  weightKg = data.weight.toString();
  weightLastNum = '.' + weightKg.slice(-1);
  weightKgFull = weightKg.slice(0, -1) + weightLastNum;

  pokemonCard.innerHTML = `
  <div class="img"> 
   <img class='poke-img' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
     data.id
   }.svg' /img>
  </div>
  <p class="number" >  #${data.id.toString().padStart(3, '0')} </p>

  <h4> ${firstLetterUppercase} </h4>

  <p class="weight"> Weight: <span>  ${weightKgFull} </span> Kg </p>
  
`;

  let ul = document.createElement('ul');
  pokemonCard.appendChild(ul);
  pokeContainer.appendChild(pokemonCard);

  getTwoAbilities(data, ul);
}

function getTwoAbilities(data, ul) {
  const abilities = data.types;
  if (abilities.length === 2) {
    ul.innerHTML = `       
    <li> ${abilities[0].type.name}  </li>
    <li> ${abilities[1].type.name} </li>`;
  } else {
    ul.innerHTML = `<li> ${abilities[0].type.name} </li>`;
  }
}

fetchPokemons();
