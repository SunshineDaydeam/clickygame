import React from "react";
import './Header.css';

const Header = props => (

  <div className="bg-green text-light border-bottom border-dark p-3">
    <h1 className="title text-center font-weight-bold">{props.title}</h1>
    <div className = "text-center">
      <h5 className="text-center scores">
        Score: 
        <span className="text-dark font-weight-bold"> {props.currentScore} </span>
        Highest Score:
        <span className="text-dark font-weight-bold"> {props.highScore} </span>
      </h5>
    </div>
  </div>
);

export default Header;