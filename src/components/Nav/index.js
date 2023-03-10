import { NavLink, useNavigate } from "react-router-dom";
import React from 'react';

const Nav = (props) => {

    const navigate = useNavigate();

    const logOut = () => {

        props.logout();
        navigate('/login')
    }
    
    return (

        <div>
            <div>
                <NavLink to="/"><h1>Makin Moves</h1></NavLink>
                <NavLink to="/Register">Sign  up</NavLink>
                {props.isLoggedIn?<NavLink to="/mytrips">mytrip</NavLink>:<NavLink to="/login">Login</NavLink>}
                {props.isLoggedIn?<NavLink to="/mytrips/addtrip">add Trip</NavLink>:null}
                {props.isLoggedIn?<button onClick={logOut}>Logout</button>:null}
            </div>
        </div>

    )

}

export default Nav