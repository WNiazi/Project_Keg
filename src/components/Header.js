import React from 'react';


const Header = (props) => {
  return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
         {/*  <img src="./img/beer-barrel-956322__480.jpg" width="30" height="30" class="d-inline-block align-top" alt=""> */}
          Keg Place
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Details</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Edit</a>
            </li>
          
          </ul>
        </div>
      </nav>
  );
}

export default Header;