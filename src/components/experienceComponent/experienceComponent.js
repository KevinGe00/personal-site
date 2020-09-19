import React, { Component } from 'react';
import PinchLogo from './companyLogos/pinch.ico'
import FortranLogo from './companyLogos/fortran.ico'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Accordion, Card } from 'react-bootstrap';
import experienceCard from './experienceCard'
import '/Users/kevinge/Desktop/SIDEPROJECTS/personal-site/node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { AnimationWrapper } from 'react-hover-animation'
import ExperienceCard from './experienceCard';

class ExperienceComponent extends Component {
    constructor(props) {
        super(props)
        AOS.init()
    }

    render() {
        const pinchInfo = {
            logo: PinchLogo,
            name: "Pinch Financial",
            position: "Software Engineer Intern",
            date: "Sept 2020 - Dec 2020",
            website: "https://pinchfinancial.com/home"
        }

        const fortranTrafficInfo = {
            logo: FortranLogo,
            name: "Fortran Traffic System",
            position: "Software Engineer Intern",
            date: "May 2020 - Aug 2020",
            website: "https://www.fortrantraffic.com/"
        }

        return (
            <div class="container font-roboto">
                <h1 class="center-text font-inherit title-margin">Experience</h1>

                <Accordion defaultActiveKey="0" bsPrefix="custom-accordion">
                    <Card className="accordion-card" data-aos="fade-up" data-aos-duration="1000">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <ExperienceCard company={pinchInfo}></ExperienceCard>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                    Currently helping to build the <a style={{ fontWeight: "bold" }} href="https://apply.pinchfinancial.com/welcome-page" target="_blank">Pinch fintech platform</a>, which redefines mortgage applications by connecting North America's top lenders and realtors with potential mortgage borrowers and insurance customers
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card" data-aos="fade-up" data-aos-duration="1000">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <ExperienceCard company={fortranTrafficInfo}></ExperienceCard>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>
                                    Worked on Fortran's flagship intelligent transportation software, <a style={{ fontWeight: "bold" }} href="https://www.fortrantraffic.com/shop/its/aria/" target="_blank">ARIA</a>. Designed and deployed a module onto ARIA that remotely configures live traffic controllers around Ontario. Implemented user-facing components for ARIA's vehicle-to-everything (V2X) section.
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* 
                <h1 class="center-text font-inherit title-margin">Experience</h1>
                <Row class="row experience-card" data-aos="fade-up" data-aos-duration="1000">
                    <a href={pinchInfo.website} target="_blank" class="col-2">
                        <AnimationWrapper>
                            <img class="company-logo" src={pinchInfo.logo} />
                        </AnimationWrapper>
                    </a>
                    <div class="experience-info col-3">
                        <a href={pinchInfo.website} target="_blank">
                            <h3 class="company-name">{pinchInfo.name}</h3>
                        </a>
                        <h6 style={{ color: "#505050" }}>{pinchInfo.position}</h6>
                        <h6 style={{ color: "#505050" }}>{pinchInfo.date}</h6>

                    </div>
                    <div class="col-7">
                        <p class="company-description">
                            Currently helping to build the <a style={{ fontWeight: "bold" }} href="https://apply.pinchfinancial.com/welcome-page">Pinch fintech platform</a>, which redefines mortgage applications by connecting North America's top lenders and realtors with potential mortgage borrowers and insurance customers
                        </p>
                    </div>


                </Row>
                <div class="row experience-card" data-aos="fade-up" data-aos-duration="1000">
                    <a href={fortranTrafficInfo.website} target="_blank" class="col-2">
                        <AnimationWrapper>
                            <img class="company-logo" src={fortranTrafficInfo.logo} />
                        </AnimationWrapper>
                    </a>
                    <div class="experience-info col-3">
                        <a href={fortranTrafficInfo.website} target="_blank">
                            <h3 class="company-name">{fortranTrafficInfo.name}</h3>
                        </a>
                        <h6 style={{ color: "#505050" }}>{fortranTrafficInfo.position}</h6>
                        <h6 style={{ color: "#505050" }}>{fortranTrafficInfo.date}</h6>

                    </div>
                    <div class="company-description col-7">
                        <p>
                            Worked on Fortran's flagship intelligent transportation software, <a style={{ fontWeight: "bold" }} href="https://www.fortrantraffic.com/shop/its/aria/">ARIA</a>. Designed and deployed a module onto ARIA that remotely configures live traffic controllers around Ontario. Implemented user-facing components for ARIA's vehicle-to-everything (V2X) section.
                        </p>
                    </div>


                </div> */}
            </div>
        )
    }
}


export default ExperienceComponent;