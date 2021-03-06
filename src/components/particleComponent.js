import React, { Component } from "react";
import Particles from "react-particles-js";
import NameSVG from "./svgs/name.svg"
import MediaQuery from "react-responsive";
class ParticleComponent extends Component {
	render() {
		return (
			<div>
				<MediaQuery minDeviceWidth={1000}>
					<div>
						<Particles
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								paddingTop: "0rem",
							}}
							params={{
								"fps_limit": 80,
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
										"value": 3
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
											"color": "rgba(255, 255, 255, 0)"
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
											"size": 3,
											"distance": 40
										}
									}
								}
							}} ></Particles>
					</div>
				</MediaQuery>

				{/* mobile display render */}
				<MediaQuery maxDeviceWidth={1000}>
					<div style={{
						position: "absolute",
						top: 80,
						left: 0,
						width: "100%",
						height: "100%",
						paddingTop: "50px",
					}}>
						<h1 class="center-text mobile-name-text">
							Kevin <br></br>
							Ge
						</h1>
					</div>
				</MediaQuery>
			</div>
		)
	}

}
export default ParticleComponent;