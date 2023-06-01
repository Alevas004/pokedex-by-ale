import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Home/Pokedex/Pokedex";
import { pokedexLoader } from "./Loaders/pokedexLoader";
import { PokemonDetail } from "../pages/PokemonDetail/PokemonDetail";

// El router de tipo browser siempre necesita que se configure correctamente la plataforma de despliegue (Netlify, Vercel, etc)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail />
      },
    ],
  },
]);
