import { NavLink } from "react-router-dom"
export default function NavBar () {
    return (
        <nav>
            <NavLink classname="HomeRout" to="/">
                Home
            </NavLink>
            <NavLink className="WatchRout" to="/watch-list">
                WatchList
            </NavLink>
            <NavLink className="AppliedRout" to="/applied">
                Applied
            </NavLink>
        </nav>
    )
}