// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { getPokemonById } from "../../services/getPokemonById";
import Loader from "../../components/loaders/Loader";


export const PokemonDetail = () => {
  // const [pokemonDetail, setPokemonDetail] = useState(null);

  // const allPokemonDetails = ["hp", "attack", "special-attack", "defense", "special-defense", "speed"]
  // const allStats = pokemonDetail?.stats.filter((stat) =>
  //   allPokemonDetails.includes(stat.name.toLowerCase())
  // );

  // useEffect(() => {
  //   const loadPokemonDetail = async () => {
  //     const pokemonData = await getPokemonById(pokemonId);

  //     console.log(pokemonData)
  //     setPokemonDetail(pokemonData);
  //   };
  //   loadPokemonDetail();
  // }, []);

    const {pokemonId} = useParams()
    

  return (
    <div>

      {/* {!pokemonId && <Loader/>}
      {pokemonId && (
        <>
        <div>
          <h1>{pokemonId.name} detail</h1>
        </div>
        </>
        
      )} */}
        
       
             
              {/* <ul className="pokemon-card__list-stats">
                {allStats.map((stat) => (
                  <li key={stat.name} className="pokemon-card__item">
                    <div className="div-stats">
                      <em>{stat.name.toUpperCase()}:</em>
                      <span> {stat.value}</span>
                    </div>
                  </li>
                ))}
              </ul> */}
    </div>
  )
}
