import React, {useState} from "react";
import "./style.css"
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";



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

// class CreateUser extends Component {
// constructor(props) {
//    super(props);
//    this.form = createRef();
// }
//    state = {
//       username: "",
//       email: "",
//       password: "",
//       passwordConfirm: "",
//       errorUsername: "",
//       errorPassword: "",
//       errorConfirm: "",
//       errorRequest:""
//    }

//    componentDidMount() {
//       this.form.current.scrollIntoView({ behavior: 'smooth' });
//    }

//    handleInputChange = event => {
//       const { name, value } = event.target;
//       this.setState({
//          [name]: value
//       });
//    };

//    handleFormSubmit = event => {
//       event.preventDefault();
//       if (!(this.state.username && this.state.email && this.state.password && this.state.passwordConfirm)) {
//          this.setState({
//             errorUsername: "*Please fill out your username",
//             errorEmail: "*Please fill out your email",
//             errorPassword: "*Please fill out your password",
//             errorConfirm: "*Please confirm your password"
//          });
//       } else if (this.state.password.length < 8) {
//          this.setState({
//             errorUsername: "",
//             errorEmail: "",
//             errorPassword: "*Password should be at least 8 characters long",
//             errorConfirm: ""
//          });
//       } else if (this.state.password !== this.state.passwordConfirm) {
//          this.setState({
//             errorUsername: "",
//             errorEmail: "",
//             errorPassword: "*Make sure your passwords match",
//             errorConfirm: ""
//          });
//       } else {
//          const newUser = {
//             username:this.state.username,
//             email:this.state.email,
//             password:this.state.password
//          }
//          API.signup(newUser).then(data => {
//             if(data.token){
//             this.props.methods.setUserId(data.user.id)
//             this.props.methods.setToken(data.token)
//             this.props.methods.setIsLoggedIn(true)
//             }
//             localStorage.setItem("token",data.token)
//             location.href = `./mytrips`
   
//          })

//          this.setState({
//             username: "",
//             email: "",
//             password: "",
//             passwordConfirm: "",
//             errorUsername: "",
//             errorPassword: "",
//             errorConfirm: ""
//          });
//       }
//    };

   
   
      return (
         <form autoComplete="off" className="p-4">
            <div className="form-group">
               <label htmlFor="username">Username</label>
               <input className="form-control"
                  value={signUpData.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="Username"
                  type="text"
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input className="form-control"
                  value={signUpData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Email"
                  type="text"
               />
      
            </div>
            <div className="form-group">
               <label htmlFor="password">Password (at least 8 characters long)</label>
               <input className="form-control"
                  value={signUpData.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
            </div>
            <div className="form-group">
               <label htmlFor="passwordConfirm">Confirm Password</label>
               <input className="form-control"
                  value={signUpData.passwordConfirm}
                  onChange={handleChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
               />
            </div>
            <p className="error">{error}</p>
            <button className="btn btn-primary" onClick={handleFormSubmit}>
               Sign Up
            </button>
         </form>
      )
   
};
export default signUp;
