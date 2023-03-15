import React, {useState} from "react";
import "./style.css"
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import StyledButton from "../trips/Button.styled";



const signUp = (props) => {

   const navigate = useNavigate();

   const [signUpData, setSignUpData] = useState({
       username:"",
       email: "",
       password: "",
       passwordConfirm: ""
   });

   const [error, setError] = useState("")

   const handleChange = (e) => {
       setSignUpData({
           ...signUpData,
           [e.target.name]: e.target.value,
       });
   };


   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(signUpData.username)
      if (!(signUpData.username && signUpData.email && signUpData.password && signUpData.passwordConfirm)) {
         //do something here with no all forms filled out
         setError("Please complete out all fields");
         
      } else if (signUpData.password !== signUpData.passwordConfirm) {
         setError("passwords do not match");
      } else {
         const newUser = {
            username:signUpData.username,
            email:signUpData.email,
            password:signUpData.password
         }
         API.signup(newUser).then(data => {
            if(data.token){
            props.methods.setUserId(data.user.id)
            props.methods.setToken(data.token)
            props.methods.setIsLoggedIn(true)
            }
            localStorage.setItem("token",data.token)
            navigate('/mytrips')
   
         })

         setSignUpData({
            username: "",
            email: "",
            password: "",
         });
         setError("");
      }
   };

   
   
      return (
         <form autoComplete="off" className="p-4" onSubmit={handleFormSubmit}>
            <div className="form-group">
               <label htmlFor="username"><b>Username</b></label>
               <input className="form-control"
                  value={signUpData.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="Username"
                  type="text"
               />
            </div>
            <div className="form-group">
               <label htmlFor="email"><b>Email</b></label>
               <input className="form-control"
                  value={signUpData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Email"
                  type="text"
               />
      
            </div>
            <div className="form-group">
               <label htmlFor="password"><b>Password (at least 8 characters long)</b></label>
               <input className="form-control"
                  value={signUpData.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
            </div>
            <div className="form-group">
               <label htmlFor="passwordConfirm"><b>Confirm Password</b></label>
               <input className="form-control"
                  value={signUpData.passwordConfirm}
                  onChange={handleChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
               />
            </div>
            <p className="error">{error}</p>
            <StyledButton type="submit" className="btn btn-outline-info">
               Sign Up
            </StyledButton>
         </form>
      )
   
};
export default signUp;
