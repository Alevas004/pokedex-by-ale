import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByTypeId } from "../../services/getPokemonsByTypeId";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? '';
  const pokemonTypeId = url.searchParams.get("pokemonType") ?? '';
  let pokemons = await getAllPokemons();
  // if (pokemonName) {
  //   pokemons = pokemons.filter((pokemon) =>
  //     pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  //   );
  // }

 
  // Filtro cruzado: se envia tanto nombre como tipo
  if (pokemonName && pokemonTypeId) {
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonTypeId){
    // Ningun filtro, obtiene todos los pokemones
    pokemons = await getAllPokemons()
  } else if (pokemonName) {
    pokemons = await getAllPokemons()
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))
  } else if (pokemonTypeId) {
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
  }
  console.log({ pokemons, pokemonName, pokemonTypeId })
  return { pokemons, pokemonName, pokemonTypeId };
};
