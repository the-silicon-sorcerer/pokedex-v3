import './home-search.style.css'

const HomeSearch = () => {
    return (
        <div className="home-search">
            <form className="home-search-form">
                <input className="home-search-input" placeholder='Search by Name or Number' />
                <button className="home-search-button">Q</button>
            </form>
            <div className="home-search-advanced" >Advenced options</div>
        </div>
    )
}

export default HomeSearch;