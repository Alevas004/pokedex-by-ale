import { useEffect, useState } from "react";
import { getPokemonById } from "../../../../services/getPokemonById";
import Loader from "../../../../components/loaders/Loader";
import "./PokedexCard.css"

const PokedexCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  

  const statsTarget = ["hp", "attack", "defense", "speed"];
  const stats = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);

      setPokemon(pokemonData);
    };
    loadPokemon();
  }, []);

  return (
    <div className="main">
    <article className="pokemon-card">
      
      {!pokemon && <Loader/>}
      {pokemon && (
        <>
        <div className="div-title">
        <h2 className="pokemon-card__title">{pokemon.name}</h2>
        </div>
          <div className="pokemon-card__img">
            <img src={pokemon.image} alt="" />
          </div>

        
          <section className="types">
            
            <h3>Type</h3>
            <ul className="pokemon-card__list">
           
                {pokemon.types.map((type) => (
                  <li key={type} className="pokemon-card__type">
                    <div className="div-stats__type">
                    {type} 
                    </div>
                  </li>
                ))}          
            </ul>
          </section>

          <section className="stats">
            
            <h3>Stats</h3>
          

            <ul className="pokemon-card__list-stats">
              {stats.map((stat) => (
                <li key={stat.name} className="pokemon-card__item">
                  <div className="div-stats">
                  <em>{stat.name.toUpperCase()}:</em>
                  <span> {stat.value}</span>
                  </div>

                </li>
              ))}
            </ul>
          </section>
     
        </>
      )}
    </article>
    </div>
  );
};

export default PokedexCard;
