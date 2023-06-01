import { useParams } from "react-router-dom"


export const PokemonDetail = () => {

    const {pokemonId} = useParams()

  return (
    <div>
        <h1>Pokemon detail</h1>
        <p>Aquí debe ir información ampliada del pokemon con el ID <mark>{pokemonId}</mark></p>
    </div>
  )
}
