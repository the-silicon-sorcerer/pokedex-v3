import { useContext } from "react"

import { PokeContext } from "../../contexts/pokemon-context/pokemon-context"
import PokeCard from "../poke-card/poke-card.compoent"

import './home-content.style.css'
import { createAction } from "../../utils/create-action"
import { PokeData } from "../../utils/general-types"
import { PokeActions } from "../../contexts/pokemon-context/pokemon-context.types"
import { MAX_INDEX } from "../../utils/misc-global-vals"

const HomeContent = () => {
    const { pokeState, pokeDispatch } = useContext(PokeContext)
    const { displayPokemon, isLoading, currentPage } = pokeState

    const pageButtonOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        pokeDispatch(createAction<PokeActions>("SET_CURRENT_PAGE", Number(e.currentTarget.id)))
    }

    const pageSelectorOnClick = (num: number) => {
        pokeDispatch(createAction<PokeActions>("SET_CURRENT_PAGE", currentPage + num))
    }

    // Renders out current set of buttons - Doesnt allow buttons to be rendered out
    // That link to indexes out of range. 

    const createCurrentArray = (current: number) => {
        const currentArray = []
        for (let i = 0; i < 5; i++) {
            if ((current + i) * 16 <= MAX_INDEX + 16) {
                currentArray.push(
                    <div key={current + i} id={`${current + i}`} className="page-button" onClick={pageButtonOnClick}>
                        <p>{current + i}</p>
                    </div>)
            }
        }
        return currentArray
    }

    return (
        <>
            {isLoading ? <div className="loading-container"><h1>LOADING...</h1></div>
                : < div className="home-content" >
                    {
                        displayPokemon.map((data) => {
                            return <PokeCard key={data.id} pokedata={data} />
                        })
                    }
                </div >}
            {(isLoading || displayPokemon.length < 16) ||
                <div className="pagination-container">
                    {currentPage > 1 && <div className="pagination-select" onClick={() => pageSelectorOnClick(-1)}>Prev</div>}
                    {createCurrentArray(currentPage)}
                    {currentPage * 16 <= MAX_INDEX && < div className="pagination-select" onClick={() => pageSelectorOnClick(1)}>Next</div>}
                </div>}
        </>
    )
}

export default HomeContent