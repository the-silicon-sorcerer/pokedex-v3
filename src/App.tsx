import Menu from "./assets/menu-icon.svg"
import PokedexLogo from './assets/pokedex-logo.png'

import sampleData from './sampleData.json'

import './App.css'

function App() {

  console.log(sampleData)

  return (
    <div className="App">
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
      <div className="home-container">
        <div className="home-search">
          <form className="home-search-form">
            <input className="home-search-input" />
            <button className="home-search-button" >Q</button>
          </form>
          <div className="home-search-advanced" >Advenced options</div>
        </div>
        <div className="home-content">
          <div className="home-content-card">
            <img src={sampleData.sprites.front_shiny} className="home-content-card-img" />
            <div className="home-content-card-info">
              <p>{`#00${sampleData.id}`}</p>
              <h3>{sampleData.name}</h3>
              <div>{sampleData.types.map((e) => {
                return <div>{e.type.name}</div>
              })}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container"></div>
    </div>
  )
}

export default App
