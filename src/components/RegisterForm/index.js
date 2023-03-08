import React, { Component, createRef } from "react";
import "./style.css"

class CreateUser extends Component {
constructor(props) {
   super(props);
   this.form = createRef();
   console.log(this.props,props)
}

   state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errorUsername: "",
      errorPassword: "",
      errorConfirm: "",
      errorRequest:""
   }

   componentDidMount() {
      this.form.current.scrollIntoView({ behavior: 'smooth' });
   }

   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
         [name]: value
      });
   };

   handleFormSubmit = event => {
      event.preventDefault();
      if (!(this.state.username && this.state.email && this.state.password && this.state.passwordConfirm)) {
         this.setState({
            errorUsername: "*Please fill out your username",
            errorEmail: "*Please fill out your email",
            errorPassword: "*Please fill out your password",
            errorConfirm: "*Please confirm your password"
         });
      } else if (this.state.password.length < 8) {
         this.setState({
            errorUsername: "",
            errorEmail: "",
            errorPassword: "*Password should be at least 8 characters long",
            errorConfirm: ""
         });
      } else if (this.state.password !== this.state.passwordConfirm) {
         this.setState({
            errorUsername: "",
            errorEmail: "",
            errorPassword: "*Make sure your passwords match",
            errorConfirm: ""
         });
      } else {
         fetch("/auth/signup", {
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
               response.text().then((body) => {
                  this.setState({
                     errorRequest: body + " Please enter different username."
                  })
                })
               return;
            }
            this.props.login().then( () => {
               this.props.history.push('/profile')
            })
         })
         .catch(err => console.log(err));

         this.setState({
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errorUsername: "",
            errorPassword: "",
            errorConfirm: ""
         });
      }
   };

   
   render() {
      return (
         <form ref={this.form} autocomplete="off" className="p-4">
            <div className="form-group">
               <label htmlFor="username">Username</label>
               <input className="form-control"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                  type="text"
               />
               <p className="error">{this.state.errorUsername}</p>
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input className="form-control"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                  type="text"
               />
               <p className="error">{this.state.errorEmail}</p>
            </div>
            <div className="form-group">
               <label htmlFor="password">Password (at least 8 characters long)</label>
               <input className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
               <p className="error">{this.state.errorPassword}</p>
            </div>
            <div className="form-group">
               <label htmlFor="passwordConfirm">Confirm Password</label>
               <input className="form-control"
                  value={this.state.passwordConfirm}
                  onChange={this.handleInputChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
               />
               <p className="error">{this.state.errorConfirm}</p>
            </div>
            <p className="error">{this.state.errorRequest}</p>
            <button className="btn btn-primary" onClick={this.handleFormSubmit}>
               Sign Up
            </button>
         </form>
      )
   }
};
export default CreateUser;