import React from "react";
import "./hero.css";


const Hero = props =>{ return(

  <div
    className="hero text-center"
    style={{ backgroundImage: `url("${props.backgroundImage}")`} }
  >
  {props.children}
  </div>
)};

export default Hero;