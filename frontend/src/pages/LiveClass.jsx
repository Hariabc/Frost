import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import conf from "../src/assets/conf.jpg";
// import Navbar from "./components/Navbar";
 // Import the generated CSS file
import "./LiveClass.css";

const LiveClass = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      {/* <Navbar /> */}
      {/* Hero */}
      <div className="hero-container">
        {/* Image */}
        <div className="image-container">
          {/* <img src={conf} className="image" /> */}
        </div>
        {/* Overlay */}
        <div className="overlay"></div>
        {/* Hero Info */}
        <div className="hero-info">
          {/* Main */}
          <div className="main">
            <h1 className="title">Live Class</h1>
            <p className="subtitle"></p>
          </div>

          {/* Enter Code */}
          <form onSubmit={submitCode} className="enter-code-form">
            <div className="form-group">
              <label className="label">Enter LiveClass ID</label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="input"
              />
            </div>
            <button type="submit" className="submit-button">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
