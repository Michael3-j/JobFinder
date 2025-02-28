import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/watch-list">WatchList</NavLink>
            <NavLink to="/applied">Applied</NavLink>
        </nav>
    )
}