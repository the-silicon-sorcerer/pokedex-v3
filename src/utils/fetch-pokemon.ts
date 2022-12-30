import axios from "axios"
import { PokeData } from "./general-types"

export const fetchPokemon = async (minId: number, maxId: number): Promise<PokeData[]> => {
    const pokeArray = []
    for (let i = minId; i <= maxId; i++) {
        pokeArray.push(axios(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    return Promise.all(pokeArray).then((res) => {
        return res.map((res) => {
            return res.data
        })
    })
}