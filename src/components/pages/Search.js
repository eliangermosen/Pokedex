import SearchBar from "../sections/SearchBar";
import PokeCard from "../cards/pokemonCard";
// import Pagination from "../sections/Pagination";
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';

const Search = () => {
    // let pokeApi = "https://pokeapi.co/api/v2/pokemon/";
    let [pokeApi, setPokeApi] = useState("https://pokeapi.co/api/v2/pokemon/");
    
    // let {data, isPending, error} = useFetch(pokeApi);
    let {data} = useFetch(pokeApi);

    // console.log(data);
    // console.log(isPending);
    // console.log(error);

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const getPokemons = async (data) => {

            data?.results.forEach(async(el)=>{
                let res = await fetch(el.url),
                    json = await res.json();

                // console.log(json);

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    // avatar: json.sprites.front_default
                    avatar: json.sprites.other.dream_world.front_default
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };
        
        getPokemons(data);
    }, [data]);//como solo quiero hacer la peticion una sola vez dejo el arreglo vacio

    const handleLinks = (e, url) => {
        e.preventDefault();
        setPokemons([]);//para que me limpie los pasados pokemones paginados
        console.log(url);
        pokeApi = url;
        console.log(pokeApi);
        setPokeApi(pokeApi);
    };

    const handleSearch = (search) => {
        console.log("EN EL EVENTO handleSearch DE SEARCH.JS");
        if(search){
            console.log(search);
            //pokeApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000";
            setPokeApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000");
            setPokemons([]);//para que me limpie los pasados pokemones paginados
            console.log(pokeApi);
            console.log(pokemons);
            console.log(data);
            console.log("FILTER");
            //console.log(searchFilter(data, search));
            //let dataFiltrada = [];
            const dataFiltrada = searchFilter(data, search);
            console.log(dataFiltrada);
            dataFiltrada.forEach(async(el)=>{
                let res = await fetch(el.url),
                    json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    // avatar: json.sprites.front_default
                    avatar: json.sprites.other.dream_world.front_default
                };
                /* console.log(`id pokemon filtrado ${pokemon.id}`);
                console.log(`name pokemon filtrado ${pokemon.name}`);
                console.log(`avatar pokemon filtrado ${pokemon.avatar}`); */
                setPokemons((dataFiltrada) => [...dataFiltrada, pokemon]);
            });
            console.log(pokemons);
        };
        ////pokeApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000";
    };

    const searchFilter = (arr, query) => {
        // si pasa pokemons[]
        //return arr?.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
        // si pasa data
        return arr.results?.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
    }

    return(
        <section className="container search-cont">
            <SearchBar lookFor={handleSearch}/>
            <section className="container-card">
                {pokemons.length === 0 ? (
                    <h3>Cargando...</h3>
                    ) : (
                        pokemons.map((el) => (
                        <PokeCard key={el.id} number={el.id} name={el.name} avatar={el.avatar}/>
                        ))
                    )
                }
            </section>
            {/* <Pagination prev={data.previous ? (data.previous) : ("")} next={data.next}/> */}
            <div className="btns-next-prev">
                <button onClick={(e)=>handleLinks(e,data.previous)} style={{visibility: data?.previous ? 'visible' : 'hidden' }}>
                    <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="inter-medium">Previous</span>
                </button>
                <button onClick={(e)=>handleLinks(e, data.next)} style={{visibility: data?.next ? 'visible' : 'hidden' }}>
                    <span className="inter-medium">Next</span>
                    <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </section>
    )
}

export default Search