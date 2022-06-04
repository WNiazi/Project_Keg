import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import beerBarrel from '../img/beerBarrel.jpg';


const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark text-white bg-dark">
        <a className="navbar-brand" href="/">
          <img src={beerBarrel} width="50" height ="50" alt="beer"></img>
          The Tap Room
        </a>
      </nav> 
    </div> 
  );
}

export default Header;