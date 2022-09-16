import "./HeroImg.css";
import React from 'react'
import { Link } from "react-router-dom";
import yelpHome from '../yelpImg/yelpHome.jpeg';

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="hero-img" src={yelpHome} alt="HeroImg" />
    </div>
    <div className="content">
        <h1>Welcome to Yelp</h1>
        <h1>Leave it to the Pros</h1>
        <div>
            <Link to="/friends" className="btn">Friends</Link>
            <Link to="/resteraunts" className="btn">Resteraunts</Link>
        </div>
    </div>
</div>
  )
}

export default HeroImg;