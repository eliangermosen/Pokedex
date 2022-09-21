import SearchBar from "../sections/SearchBar";
import PokeCard from "../cards/pokemonCard";
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';

const Search = () => {
    let pokeApi = "https://pokeapi.co/api/v2/pokemon/";
    
    // let {data, isPending, error} = useFetch(pokeApi);
    let {data} = useFetch(pokeApi);

    // console.log(data);
    // console.log(isPending);
    // console.log(error);
    // console.log(JSON.stringify(data));

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const getPokemons = async (data) => {
            // let res = await fetch(url),
            //     json = await res.json();

            // console.log(json);
            // console.log(data);

            data.results.forEach(async(el)=>{
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

    return(
        <section className="container search-cont">
            <SearchBar/>
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
            {/* <PokeCard/> */}
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
}

export default Search