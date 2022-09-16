import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import yelpLogo from '../yelpImg/yelpLogo.png';

const Navbar = () => {
    return (
      <div className="header">
        <img className="hero-logo" src={yelpLogo} alt="HeroImg" />
          {/* <Link to="/"><h1>Yelp</h1></Link> */}
          
          <ul className="navbar">
          <a href="/"><i class="fa-solid fa-bell"></i></a>
          <a href="/"><i class="fa-solid fa-comment-dots"></i></a>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/friends">Friends</Link></li>
              <li><Link to="/restauraunts">Restauraunts</Link></li>
          </ul>
      </div>
    )
  }
  
  export default Navbar;