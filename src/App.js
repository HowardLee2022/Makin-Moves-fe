import React, { Component } from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
// import Navbar from "./components/Navbar.Thien"
import MyTrip from "./pages/mytrip";
import Days from "./pages/days";
import Nav from "./components/Nav"
import API from "./utils/API";

class App extends Component{
  state = {
    isLoggedIn: false,
    username: ""
  }

  render(){  
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
       </Routes>
      </BrowserRouter>
      </Container>

    );
  }
}

export default App;
