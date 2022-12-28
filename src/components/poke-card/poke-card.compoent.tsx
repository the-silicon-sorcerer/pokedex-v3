import { PokeData } from '../../utils/general-types'
import './poke-card.style.css'
import PokeCardProps from './poke-card.types'

const PokeCard = ({ pokedata }: PokeCardProps) => {
    const { id, name, types, sprites } = pokedata

    const createId = (id: number) => {
        if (id < 10) {
            return `#00${id}`
        }
        return id < 100 ? `#0${id}` : `#${id}`
    }

    const capitalizeNames = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <div className="home-content-card">
            <img src={sprites.front_default} className="home-content-card-img" />
            <div className="home-content-card-info">
                <p>{createId(id)}</p>
                <h3>{capitalizeNames(name)}</h3>
                <div>{types.map((e) => {
                    return <div>{capitalizeNames(e.type.name)}</div>
                })}</div>
            </div>
        </div>
    )
}

export default PokeCard;