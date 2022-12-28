import { useContext } from "react"

import { PokeContext } from "../../contexts/pokemon-context/pokemon-context"
import PokeCard from "../poke-card/poke-card.compoent"

import './home-content.style.css'

const HomeContent = () => {
    const { pokeState } = useContext(PokeContext)
    const { displayPokemon } = pokeState

    return (
        <div className="home-content">
            {displayPokemon.map((data) => {
                return <PokeCard pokedata={data} key={data.id} />
            })}

        </div>
    )
}

export default HomeContent