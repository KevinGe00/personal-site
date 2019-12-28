import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import NavBar from './components/headerComponent/navBar.js';
import Jumbotron from './components/jumbotron.js';
import ParticleComponent from './components/particleComponent.js';
import AboutCompoment from './components/aboutComponent.js';
import './App.css';

function App() {
  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}>
        <ParticleComponent />
        <NavBar />
        <Jumbotron />
        <AboutCompoment />
      
    </div>
  );
}

export default App;
