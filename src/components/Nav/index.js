import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import styled from "styled-components";
import Logo from "../Nav/LogoMM.png"


const Nav = (props) => {
  const navigate = useNavigate();
  console.log("is logged in", props.isLoggedIn);
  const logOut = () => {
    props.logout();
    navigate("/login");
  };

  return (


    <div className="header">
      <NavLink className={({ isActive }) => {
        if (isActive) {
          return 'active'
        } else {
          return 'notActive'
        };
      }} to="/Makin-Moves-fe"><h1>Makin' Moves</h1></NavLink>
      

      {!props.isLoggedIn && (
        <div className="nav">
        <NavLink className={({ isActive }) => {
          if (isActive) {
            return 'active'
          } else {
            return 'notActive'
          };
        }} to="/login">Login</NavLink>
        <NavLink className={({ isActive }) => {
          if (isActive) {
            return 'active'
          } else {
            return 'notActive'
          };
        }} to="/Register">Register</NavLink>
        </div>
        )}

      {props.isLoggedIn && (
        <div className="nav">
        <NavLink className={({ isActive }) => {
          if (isActive) {
            return 'active'
          } else {
            return 'notActive'
          };
        }} to="/mytrips">My Trips</NavLink> 
        <NavLink className={({ isActive }) => {
          if (isActive) {
            return 'active'
          } else {
            return 'notActive'
          };
        }} to="/mytrips/addtrip">Create Trip</NavLink>
        <button className="nav-link" onClick={logOut}>
          Logout
        </button>
        </div>
        )}
      
    </div>

  )

};

const Ul = styled.ul`
  display: flex;
  
 

  button {
    padding: 0px 5px;
  }

  li {
    padding: 5px 10px;
    display: flex;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default Nav;
