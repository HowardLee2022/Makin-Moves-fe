import React, { Component } from "react";


class LoginForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        errorUsername: "",
        errorPassword: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.email && this.state.password) {
            fetch("/auth/login", {
                method: "POST",
                credentials: "include",
                mode: "cors",
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    this.props.login().then(() => {
                        global.$("#loginModal").modal("hide");
                        this.props.history.push('/profile')
                    })

                })
                .catch(err => {
                    this.setState({
                        errorUsername: "",
                        errorEmail: "",
                        errorPassword: "Incorrect Username and Email or Password. Please try again."
                    })
                });

            this.setState({
                username: "",
                email: "",
                password: "",
                errorUsername: "",
                errorPassword: ""
            });
        } else {
            this.setState({
                errorUsername: "*Please fill out your username",
                errorEmail: "*Please fill out your email address",
                errorPassword: "*Please fill out your password"
            })
        }

    };

    render() {

        return (
            <form autoComplete="off">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                    <p style={{ color: "red", fontSize: "20px" }}>{this.state.errorUsername}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                    <p style={{ color: "red", fontSize: "20px" }}>{this.state.errorEmail}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <p style={{ color: "red", fontSize: "20px" }}>{this.state.errorPassword}</p>
                </div>
                <button type="button" onClick={this.handleFormSubmit}
                    className="btn btn-primary w-100"
                > Log In
                </button>
            </form>
        )
    }
};

export default LoginForm;