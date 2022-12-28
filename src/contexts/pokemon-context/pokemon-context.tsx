import React, { createContext, useEffect, useReducer } from "react";
import { ContextValue, PokeActions, PokeState } from './pokemon-context.types'
import axios from "axios";

import sampleData from '../../sampleData.json'
import { PokeData } from "../../utils/general-types";

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

    console.log('provider render')

    const [pokeState, pokeDispatch] = useReducer(pokeReducer, intialPokeState)
    const value = { pokeState, pokeDispatch }

    const fetchIntialPokemonArray = async (max: number) => {
        const pokeArray: PokeData[] = []
        for (let i = 1; i <= max; i++) {
            await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(({ data }) => {
                    pokeArray.push(data)
                })
        }
        return pokeArray;
    }

    useEffect(() => {
        fetchIntialPokemonArray(16).then((res) => {
            pokeDispatch({ type: 'SET_DISPLAY_POKEMON', payload: res })
        })
    }, [])

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}