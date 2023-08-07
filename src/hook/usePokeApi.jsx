import React, { useEffect, useState } from 'react'

const usePokeApi = () => {
    const [pokemon, setPokemon] = useState(null);    
    const [loading, setLoading] = useState(null);    
    const [error, setError] = useState(null);
    const [pokeRange, setPokeRange] = useState(151);

    const getPokeList = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeRange}`);
            const data = await res.json();
            data.results.forEach((item, index) => {
                item.id = index + 1;
            })
            setPokemon(data.results);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }    

    const getPokeData = async (link) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(link);
            const data = await res.json();
            return data;
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        getPokeList();
    }, [pokeRange])
       

  return {getPokeData, pokemon, loading, error}
}

export default usePokeApi
