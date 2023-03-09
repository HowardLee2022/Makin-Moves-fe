import React, { Component } from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
import MyTrip from "./pages/mytrip";
import Days from "./pages/days";
import Modal from "./components/Modal";
import Register from "./pages/Register";

// import API from "./utils/API";

class App extends Component{
  state = {
    isLoggedIn: false,
    username: ""
  }

  

  render(){  
    return (
      <Container>
          <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/mytrips" element={<MyTrip/>}/>
         <Route path="/mytrips/:id" element = {<Days/>}/>
         <Route path="/Modal" element = {<Modal/>}/>
         <Route path="/Register" element = {<Register/>}/>
       </Routes>
      </BrowserRouter>
      </Container>

    );
  }
}

export default App;
