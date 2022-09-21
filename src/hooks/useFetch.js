import { useState, useEffect } from 'react';

export const useFetch = (pokeApi) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    // se ejecutara cuando cambie la url en el archivo donde se llama nuestro
    //hook personalizado
    useEffect(() => {
        const getPokemons = async (pokeApi) => {
            
            try {
                let res = await fetch(pokeApi);

                if(!res.ok){
                    // el statustext aveces viene vacio por eso el operador ternario
                    throw{
                        err: true, 
                        status: res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
                    };
                }

                let dataJson = await res.json();

                // data.results.forEach(async (el) => {
                //     let res = await fetch(el.pokeApi),
                //     json = await res.json();

                //     // console.log(json);
                //     let pokemon = {
                //         id: json.id,
                //         name: json.name,
                //         avatar: json.sprites.front_default,
                //     };
                //     // funcion que actualiza el estado
                //     setPokemons((pokemons) => [...pokemons, pokemon]);
                // });

                setIsPending(false);

                setData(dataJson);

                setError({err: false});
            } catch (err) {
                setIsPending(true);
                setError({err});
            }
        };
        
        getPokemons(pokeApi);
    }, [pokeApi]);

    // lo que retornara nuestra funcion sera nuestro hook
    return {data, isPending, error}
}