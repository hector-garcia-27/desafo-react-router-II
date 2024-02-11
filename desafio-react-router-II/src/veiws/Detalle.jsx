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

    if (Object.keys(pokeSelected).length > 0) {
        return (
            <div className="card">
                <h1>{pokeSelected.name}</h1>
                <div className="contenido">
                    <div className="imagen" style={{ backgroundImage: `url(${pokeSelected.sprites.other.dream_world.front_default})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                    <div className="description">
                        <ul className="lista">
                            <li><strong>Caracteristicas</strong></li>
                            <li>{pokeSelected.stats[0].stat.name}: {pokeSelected.stats[0].base_stat}</li>
                            <li>{pokeSelected.stats[1].stat.name}: {pokeSelected.stats[1].base_stat}</li>
                            <li>{pokeSelected.stats[2].stat.name}: {pokeSelected.stats[2].base_stat}</li>
                            <li>{pokeSelected.stats[3].stat.name}: {pokeSelected.stats[3].base_stat}</li>
                            <li>{pokeSelected.stats[4].stat.name}: {pokeSelected.stats[4].base_stat}</li>
                            <li>{pokeSelected.stats[5].stat.name}: {pokeSelected.stats[5].base_stat}</li>
                            <li>type: {pokeSelected.types[0].type.name}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}