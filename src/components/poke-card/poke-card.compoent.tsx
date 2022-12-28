import './poke-card.style.css'
import PokeCardProps from './poke-card.types'

const PokeCard = ({ pokedata }: PokeCardProps) => {
    console.log('pokecard render')
    console.log(pokedata)
    return (
        <div className="home-content-card">
            <img src={pokedata.sprites.front_default} className="home-content-card-img" />
            <div className="home-content-card-info">
                <p>{`#00${pokedata.id}`}</p>
                <h3>{pokedata.name}</h3>
                <div>{pokedata.types.map((e) => {
                    return <div>{e.type.name}</div>
                })}</div>
            </div>
        </div>
    )
}

export default PokeCard;