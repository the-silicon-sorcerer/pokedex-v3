import React, { useRef, useContext } from 'react'
import { PokeContext } from '../../contexts/pokemon-context/pokemon-context'
import './home-search.style.css'
import { createAction } from '../../utils/create-action'
import { PokeActions } from '../../contexts/pokemon-context/pokemon-context.types'
import axios from 'axios'


const HomeSearch = () => {
    const { pokeDispatch } = useContext(PokeContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputRef.current!.value.replace(/\s/g, '').length !== 0) {
            pokeDispatch(createAction<PokeActions>('SET_LOADING', true))
            axios(`https://pokeapi.co/api/v2/pokemon/${inputRef.current!.value.toLocaleLowerCase()}`)
                .then((res) => {
                    console.log(res.data)
                    pokeDispatch(createAction<PokeActions>('SET_DISPLAY_POKEMON', [res.data]))
                })
                .catch((err) => {
                    pokeDispatch(createAction<PokeActions>('SET_LOADING', false))
                    inputRef.current!.value = ''
                    alert('CANNOT FIND POKEMON')
                })
        }
    }

    return (
        <div className="home-search">
            <form className="home-search-form" onSubmit={formOnSubmit}>
                <input ref={inputRef} className="home-search-input" placeholder='Search by Name or Number' />
                <button className="home-search-button">Q</button>
            </form>
            <div className="home-search-advanced" >Advenced options</div>
        </div>
    )
}

export default HomeSearch;