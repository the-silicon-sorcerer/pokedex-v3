import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

import { ContextValue, PokeActions, PokeState } from './pokemon-context.types'
import { PokeData } from "../../utils/general-types";
import { createAction } from "../../utils/create-action";

export const PokeContext = createContext<ContextValue>({} as ContextValue)

function isPokeData(payload: PokeData[] | boolean): payload is PokeData[] {
    return (payload as PokeData[]).length !== undefined;
}

function isBoolean(payload: PokeData[] | boolean): payload is boolean {
    return typeof payload === 'boolean';
}

const pokeReducer = (state: PokeState, action: PokeActions): PokeState => {
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
            if (isBoolean(payload))
                return {
                    ...state,
                    isLoading: payload
                }
        default:
            return {
                ...state
            }
    }
}

const intialPokeState: PokeState = {
    displayPokemon: [],
    isLoading: false
}

export const PokeProvider = ({ children }: { children: React.ReactNode }) => {

    const [pokeState, pokeDispatch] = useReducer(pokeReducer, intialPokeState)
    const value = { pokeState, pokeDispatch }

    const fetchPokemon = async (minId: number, maxId: number): Promise<PokeData[]> => {
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

    useEffect(() => {
        pokeDispatch(createAction<PokeActions>("SET_LOADING", true))
        fetchPokemon(1, 16)
            .then((res) => {
                pokeDispatch(createAction<PokeActions>('SET_DISPLAY_POKEMON', res))
            })
            .catch((e) => {
                throw new Error(e)
            })
    }, [])

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}
