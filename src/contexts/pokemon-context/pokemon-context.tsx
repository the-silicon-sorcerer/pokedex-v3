import React, { createContext, useEffect, useReducer } from "react";
import { ContextValue, PokeActions, PokeState } from './pokemon-context.types'
import axios from "axios";

export const PokeContext = createContext<ContextValue>({} as ContextValue)

const pokeReducer = (state: PokeState, action: PokeActions) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_DISPLAY_POKEMON':
            return {
                ...state,
                displayPokemon: payload
            }
        default:
            return {
                ...state
            }
    }
}

const intialPokeState: PokeState = {
    displayPokemon: []
}

export const PokeProvider = ({ children }: { children: React.ReactNode }) => {

    const [pokeState, pokeDispatch] = useReducer(pokeReducer, intialPokeState)
    const value = { pokeState, pokeDispatch }

    const fetchPokemon = async (minId: number, maxId: number) => {
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
        fetchPokemon(1, 101)
            .then((res) => {
                pokeDispatch({ type: 'SET_DISPLAY_POKEMON', payload: res })
            })
            .catch((e) => {
                throw new Error(e)
            })
    }, [])

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}