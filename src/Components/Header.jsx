import "../Styles/Header.css"
import { NavLink, useNavigation } from "react-router-dom"
export default function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="headretList">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>       
        </header>
    )
}

