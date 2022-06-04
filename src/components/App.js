import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../img/background.jpg';

function App(){

  return (
    <React.Fragment>
      <Header />
      <div className ="container" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%', margin:0 ,padding: 0 }}>
        <KegControl />
      </div> 
    </React.Fragment>
  );
}

export default App;