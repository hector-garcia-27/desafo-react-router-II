import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {

    useEffect(() => {
        PeticionApi()
    }, [])

    const [dataPokemon, setDataPokemon] = useState([]);
    const [optionSelected, setOptionSelected] = useState("bulbasaur")

    const PeticionApi = async () => {
        try {
            const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
            const res = await fetch(apiUrl);
            const { results } = await res.json();
            setDataPokemon(results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PokeContext.Provider value={{ dataPokemon, setDataPokemon, optionSelected, setOptionSelected }} >
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider