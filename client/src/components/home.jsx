import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import dicecube from "../assets/ludo dice.png";
import "./home.css";
import axios from "axios"
import { useState } from "react";

export const Home = () => {
  let islogged = useSelector((state) => state.loggedIn);
  let navigate = useNavigate()

  function handlePlay() {
    if (!islogged) {
      alert("Please Log In to Play Online");
    } else {
      navigate("/ludo")
    }
  }

  return (
    <div className="mainhomecontainer">
      <div>
        <h2 className="ludoonlinetext">Play Ludo Games Online</h2>
        <div className="styledborder"></div>
        <p className="ludoonlinetextp">
          Play Ludo Games online instantly without downloading. Enjoy a lag-free
          and high-quality gaming experience while playing games online with
          Ludo Verse.
        </p>
        <div className="dicecubeimage">
          <img src={dicecube} />
        </div>
        <button onClick={handlePlay} id="playnowbutton">
          Play Now
        </button>
      </div>
    </div>
  );
};
