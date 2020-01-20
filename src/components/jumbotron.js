import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron" id="jumbotron">
                {/* stars */}
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>

                <div class="arrow-container">
                <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
              >
                    <a>
                     
                        <div class="arrow"></div>
                    </a>
                    </Link>
                </div>
           
            </div>
        )
    }

}

export default Jumbotron;