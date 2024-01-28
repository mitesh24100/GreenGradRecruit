import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import video from "./BG.mp4";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <video autoPlay loop muted id='video'>
          <source src={video} type='video/mp4' />
        </video>
        <div className="banner-img">
          
          <div className="title">
            <h3>
              <span>Green</span>GRADRecruit
              <br />
              
            </h3>
            
          </div>
          <div className="button" data-testid="btn">
            <Link to="/Jobs">Browse Jobs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
