import Result from "../sections/Result";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Message from "./Message";

const Pokemon = () => {
    
    let {pokemon} = useParams();

    let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let {data,error} = useFetch(pokeApi);

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(error?.err.err);

    useEffect(() => {
        setLoading(true);

        if(data){
            setLoading(false);
        }

        if(error?.err.err){
            setLoading(false);
            setErr(true);
        }
    }, [data,error]);

    return(
        <section className="container">
            {/* conditional rendering: si la variable loading es verdadera cargame el componente */}
            {loading && <Loader/>}
            {err && <Message 
                msg={`Error ${error?.err.status} ${error?.err.statusText}`} 
                bgColor="#dc3545"
            />}
            {/* no se renderizara hasta que data tenga algo */}
            {data && <Result name={data.name}
                avatar={data.sprites.other.dream_world.front_default}
                weight={data.weight}
                height={data.height}
                types={data.types}
                abilities={data.abilities}
                stats={data.stats}
            />}
        </section>
    )
}

export default Pokemon