import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  return (
    <React.Fragment>
      <Header />
      <div className ="container">
        <KegControl />
      </div> 
    </React.Fragment>
  );
}

export default App;