import SearchBar from "../sections/SearchBar";
import PokeCard from "../cards/pokemonCard";

const Search = () => (
    <section className="container search-cont">
        <SearchBar/>
        <PokeCard/>
        <div className="btns-next-prev">
            <a href="/search">
                <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="inter-medium">Previous</span>
            </a>
            <a href="/search">
                <span className="inter-medium">Next</span>
                <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>
    </section>
)

export default Search