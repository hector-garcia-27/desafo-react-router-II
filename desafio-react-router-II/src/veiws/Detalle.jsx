import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detalle() {

    const { name } = useParams()
    const [pokeSelected, setPokeSelected] = useState({})

    useEffect(() => {
        consultPokeSelected()
    }, [name])

    const consultPokeSelected = async () => {
        try {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
            const res = await fetch(apiUrl)
            const data = await res.json()
            setPokeSelected(data)
        } catch (error) {
            console.log("hay un error en la peticion de la api " + error)
        }
    }

    return (
        <div className="card">
            {console.log(pokeSelected)}
            <h1>{pokeSelected.name}</h1>
            <div>
            <img src={pokeSelected.sprites.other.dream_world.front_default} alt="" />
            <div className="description">
                
            </div>
            </div>
        </div>
    )
}