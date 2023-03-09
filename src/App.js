// import React, { Component } from 'react';
import React,{useState} from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
// import Navbar from "./components/Navbar.Thien"
import MyTrip from "./pages/mytrip";
import Days from "./pages/days";
import Activities from "./pages/activities";
import Register from "./pages/Register"
import Nav from "./components/Nav";
import API from "./utils/API";

// class App extends Component{
//   state = {
//     isLoggedIn: false,
//     username: ""
//   }
function App(){


  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // useEffect(()=>{
  //   const savedToken = localStorage.getItem("token");
  //   console.log(savedToken)
  //   if(savedToken){
  //     API.isValidToken(savedToken).then(tokenData=>{
  //       if(tokenData.isValid){
  //         setToken(savedToken);
  //         setUserId(tokenData.user.id)
  //         setIsLoggedIn(true)
  //       } else {
  //         localStorage.removeItem("token")
  //       }
  //     })
  //   }
  // },[])
  
    return (
      <Container>
        {/* <Navbar logOut={this.logOut} isLoggedIn={this.state.isLoggedIn} username={this.state.username}/> */}
          <BrowserRouter>
          <Nav/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/mytrips" element={<MyTrip/>}/>
         <Route path="/mytrips/:id" element = {<Days/>}/>
         <Route path="/mytrips/days/:id" element ={<Activities/>}/>
         <Route path="/Register" element ={<Register setToken={setToken} setUserId={setUserId} setIsLoggedIn={setIsLoggedIn} />}/>
       </Routes>
      </BrowserRouter>
      </Container>

    );
  }

export default App;
