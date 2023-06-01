import { useContext } from "react";
import { UserNameContext } from "../../../context/UserNameContext";
import "./../Pokedex/Pokedex.css";
import { PokemonList } from "./PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import { FilterForm } from "./FilterForm/FilterForm";
import { NoPokemons } from "../../../components/NoPokemons/NoPokemons";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContext);
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const loadPokemons = async () => {
  //     const pokemonsData = await getAllPokemons();
  //     setPokemons(pokemonsData);
  //   };
  //   loadPokemons();
  // }, []);

  return (
    <div className="section-bg6">
      <div className="section-bg7">
        <div className="section-bg8">
          <section>
            <p className="pokedex-message">
              <em className="pokedex-message-user">Welcome {userName}!</em>Here
              you will find your fav Pokemon
            </p>

            <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

            {!pokemons.length ? (
              <NoPokemons />
            ) : (
              <PokemonList pokemons={pokemons} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
