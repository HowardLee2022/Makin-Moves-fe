import { NavLink } from "react-router-dom";
import React from 'react';

const Nav = () => {
    
    return (

        <div>
            <div>
                <NavLink to="/"><h1>Makin Moves</h1></NavLink>
                <NavLink to="/Register">Sign  up</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>

    )

}

export default Nav