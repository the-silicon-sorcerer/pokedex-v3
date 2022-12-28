import Menu from '../../assets/menu-icon.svg'
import PokedexLogo from '../../assets/pokedex-logo.png'
import './navigation.style.css'

const Navigation = () => {
    return (
        <div className="nav-container">
            <img src={Menu} className="nav-menu" />
            <img src={PokedexLogo} className="nav-logo" />
            <div className="nav-search">
                <form className="nav-search-from">
                    <input className="nav-serach-input" />
                    <button className="nav-serach-button">Q</button>
                </form>
            </div>
        </div>
    )
}

export default Navigation