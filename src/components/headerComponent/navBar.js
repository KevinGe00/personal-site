import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <Link
                activeClass="active"
                to="jumbotron"
                spy={true}
                smooth={true}
                duration={500}
              >
          <a class="navbar-brand" href="#"><strong>KG</strong></a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
              >
                <a class="nav-link">About <span class="sr-only">(current)</span></a>
              </Link>
                
              </li>
              <li class="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <a class="nav-link" href="#">Projects</a>
                </Link>
              </li>
              <li class="nav-item">
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a class="nav-link" href="#">Contact</a>
              </Link>
              </li>
              <li class="nav-item">
   
                <a class="nav-link" href='https://drive.google.com/file/d/1HbDSBylmFsUSFT0LFgke2JZyKsaF9M0E/view?usp=sharing' target="_ ">Resume <i class="fas fa-scroll"></i></a>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </header>
    )
  }
}

export default NavBar;