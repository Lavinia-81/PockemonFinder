document.querySelector("#find").addEventListener("click", fetchPokemon);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLowerCase(string) {
  return string.toLowerCase();
}

function fetchPokemon() {
  const name = document.querySelector("#pokeName").value;
  const pokemonName = toLowerCase(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".resultContainer").innerHTML = `
      <div>
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalize(data.name)}" />
      </div>
      <div class="info">
        <h1>${capitalize(data.name)}</h1>
        <p>Weight: ${data.weight}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".resultContainer").innerHTML = `
      <h4>Pokemon not found 😞</h4>`;
      console.error("Pokemon not found", err);
    });
}

