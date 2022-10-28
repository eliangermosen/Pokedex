import SearchBar from "../sections/SearchBar";
import PokeCard from "../cards/pokemonCard";
import Loader from "./Loader";
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';

const Search = () => {
    let [pokeApi, setPokeApi] = useState("https://pokeapi.co/api/v2/pokemon/");
    let {data, isPending} = useFetch(pokeApi);

    const [pokemons, setPokemons] = useState([]);
    const [dataFiltrada, setDataFiltrada] = useState([]);

    useEffect(() => {
        if(dataFiltrada.length === 0){
            const getPokemons = async (data) => {
    
                data?.results.forEach(async(el)=>{
                    let res = await fetch(el.url),
                        json = await res.json();
    
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.other.dream_world.front_default
                    };
    
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
            };
            
            getPokemons(data);
        }
        else{
            setPokemons([]);
            const getFilterPokemons = async () => {
                dataFiltrada.forEach(async(el)=>{
                    let res = await fetch(el.url),
                        json = await res.json();

                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.other.dream_world.front_default
                    };
                    setPokemons((dataFiltrada) => [...dataFiltrada, pokemon]);
                });
            }
            getFilterPokemons();
        }
    }, [data, dataFiltrada]);//hooks se ejecutara cada vez que varie data o dataFiltrada

    const handleLinks = (e, url) => {
        e.preventDefault();
        setPokemons([]);//para que me limpie los pasados pokemones paginados
        pokeApi = url;
        setPokeApi(pokeApi);
    };

    const handleSearch = (search) => {
        if(search){
            setPokeApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000");
            setPokemons([]);//para que me limpie los pasados pokemones paginados
            let allFilter = searchFilter(data, search);
            let smallFilter = allFilter.slice(0,20);//filtrando del 0 al 19 ya que slice no incluye el final
            setDataFiltrada(smallFilter);
        };
    };

    const searchFilter = (arr, query) => {
        return arr.results?.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
    }

    return(
        <section className="container search-cont">
            {isPending && <Loader/>}
            <SearchBar lookFor={handleSearch}/>
            <section className="container-card">
                {pokemons.length === 0 ? (
                    <Loader/>
                    ) : (
                        pokemons
                        .sort((a, b) => a.id - b.id)
                        .map((el,index) => (
                        <PokeCard key={index} number={el.id} name={el.name} avatar={el.avatar}/>
                        ))
                    )
                }
            </section>
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