let body = document.querySelector('body');

let divWrapper = document.createElement('div');
divWrapper.classList = 'wrapper';
body.appendChild(divWrapper);

let divCard;

const getPokemonName = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=200%27/'
  );

  const data = await response.json();
  const namesArr = data.results;
  let structure = '';
  namesArr.map((values) => {
    // let p = document.createElement('p');
    // p.classList = 'text';
    // p.innerHTML = values.name;
    // divCard = document.createElement('div');
    // divCard.classList = 'pokemon-card';
    // divWrapper.appendChild(divCard);
    // divCard.appendChild(p);
    // console.log(values.name);
  });

  const responseAbility = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
  const dataAbility = await responseAbility.json();
  const dataArr = dataAbility.types;
  // console.log(dataArr[0].type);

  dataArr.forEach((kind) => {
    console.log(kind.type.name);
  });
};

getPokemonName();

// const getPokemonData = async () => {
// const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
// const data = await response.json();
// const dataArr = data.types;

// console.log(data.types);

// let structure = '';
// dataArr.map((values) => {
//   structure += `<p class="ability"> ${values.type} </p>`;
// });
// };

// getPokemonData();

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
