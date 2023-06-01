import { axiosInstance } from "../api/axiosInstance";
import img12 from "../images/compresspng/img12.png"

const getPokmonImg = (sprites) => {
  const firstOption = sprites.other.dream_world.front_default;
  const secondOption = sprites.other["official-artwork"].front_default;
  const thirdOption = sprites.other.home.front_default;
  const fourthOption = [img12]

  if (firstOption) {
    return firstOption;
  } else if (secondOption) {
    return secondOption;
  } else if (thirdOption) {
    return thirdOption;
  } else { return fourthOption }

  // return imagen de un pokemon con signo de interrogación
};
export const getPokemonById = async (id) => {

  try {
    const res = await axiosInstance.get(`pokemon/${id}`);
    const pokemonData = res.data;

    const adaptedPokemon = {
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonData.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
      image: getPokmonImg(pokemonData.sprites),
      
    };
    return adaptedPokemon
  } catch (error) {
    console.error(error);
  }
};
