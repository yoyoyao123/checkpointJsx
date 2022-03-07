import React, {Component} from 'react';
import Yoyo from './composant/Yoyo.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import myImage from './img1.png';



class App extends React.Component {
  render() {
    return (
      <div className="App">
          <p>bonjour</p>
          <Yoyo img = {myImage} />
      </div>
    );
  }
}

export default App;
