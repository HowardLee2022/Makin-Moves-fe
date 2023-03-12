import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";


const Login = (props) => {

    const navigate =useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""

    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            const userObj = {
                email: loginData.email,
                password: loginData.password
            }
            console.log(userObj);
            API.login(userObj).then(data => {
                console.log(props);
                props.methods.setUserId(data.user.id)
                props.methods.setToken(data.token)
                props.methods.setIsLoggedIn(true)
                localStorage.setItem("token", data.token)
                navigate('/mytrips')

            })
            setLoginData({
                email: "",
                password: "",
            });
        }
    };


    return (
        <form autoComplete="off">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control"
                    value={loginData.email}
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="Email"
                />
                {/* <p style={{ color: "red", fontSize: "20px" }}>{this.state.errorEmail}</p> */}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control"
                    value={loginData.Password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                />
                {/* <p style={{ color: "red", fontSize: "20px" }}>{this.state.errorPassword}</p> */}
            </div>
            <button type="button" onClick={handleFormSubmit}
                className="btn btn-primary w-100"
            > Log In
            </button>
        </form>
    )
}

export default Login;