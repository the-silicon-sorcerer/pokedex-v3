import { PokeData } from "../../utils/general-types"

export interface ContextValue {
    pokeState: PokeState
    pokeDispatch: React.Dispatch<PokeActions>
}

export interface PokeActions {
    type: 'SET_DISPLAY_POKEMON'
    payload: Array<PokeData>
}
export interface PokeState {
    displayPokemon: Array<PokeData>
}
