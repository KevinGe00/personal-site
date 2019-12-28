import React, { Component } from "react";
import Particles from "react-particles-js";
import DeerSVG from "./svgs/deer.svg";
import LionSVG from "./svgs/lion.svg"
import SnakeSVG from "./svgs/snake.svg"
import WolfSVG from "./svgs/wolf.svg"
import DiamondSVG from "./svgs/diamond.svg"
import NameSVG from "./svgs/name.svg"

class ParticleComponent extends Component {
    render() {
        return (

  <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    paddingTop: "50px",
  }}
>
<Particles
    params={{
	    "fps_limit": 50,
	    "particles": {
	        "number": {
	            "value": 600,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.7
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 2,
	                "sync": false
	            },
	            "value": 0.6
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 2.2,
	        "type": "inline",
	        "move": {
	            "radius": 3
	        },
	        "url": NameSVG,
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }
	}} />

</div>


        )
    }

}
export default ParticleComponent;