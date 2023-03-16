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
    <nav>
      {/* <div><img src={Logo} alt="" style={{ width: '250px', height: 'auto' }}></img> </div> */}
      <NavLink className="navbar-brand" to="/">
        <h1 className="display-5">Makin' Moves</h1>
      </NavLink>

        {!props.isLoggedIn && (
          
      <Ul style={{ listStyleType: "none" }}>
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
          </Ul>
        )}

        {props.isLoggedIn && (
          <Ul>
            <li>
              <NavLink className="nav-link" to="/mytrips">
                My Trip
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/mytrips/addtrip">
                Create A Trip
              </NavLink>
            </li>
            <li>
              <button className="nav-link" onClick={logOut}>
                Logout
              </button>
            </li>
          </Ul>
        )}
      
    </nav>
  );
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
