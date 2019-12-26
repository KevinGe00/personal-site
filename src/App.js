import React from 'react';
import NavBar from './components/headerComponent/navBar.js';
import Jumbotron from './components/jumbotron.js';
import ParticleComponent from './components/particleComponent.js';
import AboutCompoment from './components/aboutComponent.js';
import './App.css';

function App() {
  return (
    <div style={{
      position: "absolute",
      width: "100%",
      height: "100%",
    }}>
        <ParticleComponent />

        <NavBar />
        <Jumbotron />
        <div id="red">
        <AboutCompoment />
        </div>
      

    </div>
  );
}

export default App;
