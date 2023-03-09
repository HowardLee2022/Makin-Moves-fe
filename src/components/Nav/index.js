import { NavLink } from "react-router-dom";
import React from 'react';

const Nav = (props) => {
    
    return (

        <div>
            <div>
                <NavLink to="/"><h1>Makin Moves</h1></NavLink>
                <NavLink to="/Register">Sign  up</NavLink>
                {props.isLoggedIn?<NavLink to="/mytrips">mytrip</NavLink>:<NavLink to="/login">Login</NavLink>}
                {props.isLoggedIn?<NavLink to="/mytrips/addtrip">add Trip</NavLink>:null}
                {props.isLoggedIn?<button onClick={props.logout}>Logout</button>:null}
            </div>
        </div>

    )

}

export default Nav