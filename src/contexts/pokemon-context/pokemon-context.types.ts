import { PokeData } from "../../utils/general-types"

export interface ContextValue {
    pokeState: PokeState
    pokeDispatch: React.Dispatch<PokeActions>
}

export interface PokeActions {
    type: 'SET_DISPLAY_POKEMON' | 'SET_LOADING'
    payload: Array<PokeData> | boolean
}
export interface PokeState {
    displayPokemon: Array<PokeData>
    isLoading: boolean
}
