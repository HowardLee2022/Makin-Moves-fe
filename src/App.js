// import React, { Component } from 'react';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MyTrip from "./pages/mytrip";
import Days from "./pages/days";
import Activities from "./pages/activities";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Addtrip from "./pages/addtrip";
import API from "./utils/API";
import Login from "./pages/Login";
import SingleDay from "./pages/singleday";
import "./App.css";
import io from "socket.io-client";
import Homechat from "./pages/homechat";
import Chat from "./pages/chat";

const socket = io.connect("https://makin-moves-be.herokuapp.com/"); //Chat server

function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const logout = () => {
    setToken("");
    setUserId(0);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    console.log(savedToken);
    if (savedToken) {
      API.isValidToken(savedToken).then((tokenData) => {
        if (tokenData.isValid) {
          setToken(savedToken);
          setUserId(tokenData.user.id);
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  }, []);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} userId={userId} logout={logout} />
      <Routes>
        <Route path="/Makin-Moves-fe" element={<Home />} />
        <Route
          path="/mytrips/addtrip"
          element={<Addtrip userId={userId} token={token} />}
        />
        <Route
          path="/mytrips"
          element={
            <MyTrip userId={userId} token={token} isLoggedIn={isLoggedIn} />
          }
        />
        <Route path="/mytrips/:id" element={<Days  userId={userId} token={token} isLoggedIn={isLoggedIn} />} />
        <Route path="/mytrips/days/:id" element={<Activities />} />
        <Route
          path="/Register"
          element={
            <Register
              setToken={setToken}
              setUserId={setUserId}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/Login"
          element={
            <Login
              setToken={setToken}
              setUserId={setUserId}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/mytrips/day/:id" element={<SingleDay />} />
      </Routes>
      <div className="App">
        <Routes>
          <Route
            path="/homechat"
            element={
              <Homechat
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

