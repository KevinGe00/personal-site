import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
          <a class="navbar-brand" href="#">KEVIN GE</a>
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
                offset={-70}
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
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;