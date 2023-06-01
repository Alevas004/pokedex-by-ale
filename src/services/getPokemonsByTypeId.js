import { axiosInstance } from "../api/axiosInstance"


export const getPokemonsByTypeId = async (typeId) => {
    try {
        const res = await axiosInstance.get(`type/${typeId}`)
        
        return res.data.pokemon.map((pokemon) => pokemon.pokemon)
    } catch (error) {
        console.error(error)
    }
}