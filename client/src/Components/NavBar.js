import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav className="nav">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/comedians">
                Comedians
            </NavLink>
            <NavLink to="/reviews/new">
                Create New Review
            </NavLink>
        </nav>
    )

}

export default NavBar