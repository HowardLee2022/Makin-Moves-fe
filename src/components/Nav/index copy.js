import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import styled from 'styled-components'

const Nav = (props) => {
  const navigate = useNavigate();
  console.log("is logged in",props.isLoggedIn);
  const logOut = () => {
    props.logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <h1 className="display-5">Makin' Moves</h1>
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {!props.isLoggedIn && (
            <>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            {props.isLoggedIn ? (
              <NavLink className="nav-link" to="/mytrips">
                My Trip
              </NavLink>
            ) : null}
            {props.isLoggedIn ? (
              <NavLink className="nav-link" to="/mytrips/addtrip">
                Create A Trip
              </NavLink>
            ) : null}
            {props.isLoggedIn ? (
              <button className="nav-link" onClick={logOut}>
                Logout
              </button>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
