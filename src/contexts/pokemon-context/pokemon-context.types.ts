import { PokeData } from "../../utils/general-types"

export interface ContextValue {
    pokeState: PokeState
    pokeDispatch: React.Dispatch<PokeActions>
}

export interface PokeActions {
    type: 'SET_DISPLAY_POKEMON' | 'SET_LOADING' | 'SET_CURRENT_PAGE'
    payload: Array<PokeData> | boolean | number
}
export interface PokeState {
    displayPokemon: Array<PokeData>
    isLoading: boolean
    currentPage: number
}
