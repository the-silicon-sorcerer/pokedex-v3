import HomeSearch from '../../components/home-search/home-search.compoent'
import HomeContent from '../../components/home-content/home-content.compoent'

import './home.style.css'

const Home = () => {
    return (
        <div className="home-container">
            <HomeSearch />
            <HomeContent />
        </div>
    )
}

export default Home;