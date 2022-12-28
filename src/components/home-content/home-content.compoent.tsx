import { useContext } from "react"

import { PokeContext } from "../../contexts/pokemon-context/pokemon-context"
import PokeCard from "../poke-card/poke-card.compoent"

import './home-content.style.css'

const HomeContent = () => {
    const { pokeState } = useContext(PokeContext)
    const { displayPokemon } = pokeState

    console.log(pokeState)
    console.log(displayPokemon.length)
    return (
        <div className="home-content">
            {displayPokemon.map((data) => {
                console.log('working')
                return <PokeCard pokedata={data} key={data.id} />
            })}

        </div>
    )
}

export default HomeContent