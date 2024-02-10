import { NavLink } from "react-router-dom"

export default function Navbar() {

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    return (
        <nav>
            <img className="logoPoke" src="https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png" alt="logo pokemon" />
            <div className="links">
                <NavLink className={`texto ${setActiveClass}`} to='/'>Home</NavLink>
                <NavLink className={`texto ${setActiveClass}`} to='/Pokemones'>Pokemones</NavLink>
            </div>
        </nav>
    )
}