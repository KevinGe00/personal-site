import React, { Component } from 'react';
import '/Users/kevinge/Desktop/SIDEPROJECTS/personal-site/node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { AnimationWrapper } from 'react-hover-animation'

class ExperienceCard extends Component {
    constructor(props) {
        super(props)
        AOS.init()
    }

    render() {
        const company = this.props.company

        return (
            <div class="experience-card">
                <a href={company.website} target="_blank">
                    <AnimationWrapper style={{
                        display: "inline-block"
                    }}>
                        <img class="company-logo" src={company.logo} />
                    </AnimationWrapper>
                </a>
                <div>
                    <a href={company.website} target="_blank">
                        <h3 class="company-name">{company.name}</h3>
                    </a>
                    <h6 style={{ color: "#2b2b2b" }}>{company.position}</h6>
                    <h6 style={{ color: "#505050" }}>{company.date}</h6>
                </div>
                <i class="fas fa-angle-double-down" style={{ marginLeft: "auto" }}></i>
            </div>
        )
    }
}


export default ExperienceCard;