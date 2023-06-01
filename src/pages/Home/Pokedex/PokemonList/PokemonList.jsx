import { useState } from "react";
import { usePagination } from "../../../../hooks/usePagination";
import { PagesComponent } from "../pagesComponent/PagesComponent";
import PokedexCard from "../pokedexCard/PokedexCard";
import "./PokemonList.css";
import { Link } from "react-router-dom";

export const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(15);

  const [currentPage, totalPages, pokemonSlice, changePageTo] = usePagination(
    pokemons,
    pokemonsPerPage
  );

  return (
    <section className="section">
      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />

      <ul className="pokemon-bg">
        <div className="bg-div">
          {pokemonSlice.map((pokemon) => (
            <li key={pokemon.url}>
              <Link
                style={{ color: "unset", textDecoration: "unset" }}
                to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
              >
                <PokedexCard pokemonId={pokemon.url.split("/").at(-2)} />
              </Link>
            </li>
          ))}
        </div>
      </ul>

      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
    </section>
  );
};
