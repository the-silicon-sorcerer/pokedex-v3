import React, { createContext, useEffect, useReducer } from "react";

import { ContextValue, PokeActions, PokeState } from './pokemon-context.types'
import { PokeData } from "../../utils/general-types";
import { createAction } from "../../utils/create-action";
import { currentPokeIndexes } from "../../utils/current-poke-index";
import { fetchPokemon } from "../../utils/fetch-pokemon";

export const PokeContext = createContext<ContextValue>({} as ContextValue)

function isPokeData(payload: PokeData[] | boolean | number): payload is PokeData[] {
    return (payload as PokeData[]).length !== undefined;
}

const pokeReducer = (state: PokeState, action: PokeActions) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_DISPLAY_POKEMON':
            if (isPokeData(payload))
                return {
                    ...state,
                    displayPokemon: payload,
                    isLoading: false
                }
        case 'SET_LOADING':
            if (typeof payload === 'boolean')
                return {
                    ...state,
                    isLoading: payload
                }

        case 'SET_CURRENT_PAGE':
            if (typeof payload === 'number')
                return {
                    ...state,
                    currentPage: payload
                }
        default:
            return {
                ...state
            }
    }
}

const intialPokeState: PokeState = {
    displayPokemon: [],
    isLoading: false,
    currentPage: 1
}

export const PokeProvider = ({ children }: { children: React.ReactNode }) => {

    const [pokeState, pokeDispatch] = useReducer(pokeReducer, intialPokeState)
    const value = { pokeState, pokeDispatch }

    useEffect(() => {
        pokeDispatch(createAction<PokeActions>("SET_LOADING", true))
        fetchPokemon(...currentPokeIndexes(pokeState.currentPage))
            .then((res) => {
                pokeDispatch(createAction<PokeActions>('SET_DISPLAY_POKEMON', res))
            })
            .catch((e) => {
                throw new Error(e)
            })
    }, [pokeState.currentPage])

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}
