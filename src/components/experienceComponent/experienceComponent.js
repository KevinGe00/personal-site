import React, { Component } from 'react';
import PinchLogo from './companyLogos/pinch.ico'
import FortranLogo from './companyLogos/fortran.ico'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from 'react-bootstrap';
import '/Users/kevinge/Desktop/SIDEPROJECTS/personal-site/node_modules/aos/dist/aos.css';
import AOS from 'aos';
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
                <h1 class="center-text font-inherit title-margin white">Experience</h1>

                <Accordion defaultActiveKey="0" bsPrefix="custom-accordion">
                    <Card className="accordion-card" data-aos="fade-up" data-aos-duration="1000">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="orange-gradient">
                            <ExperienceCard company={pinchInfo}></ExperienceCard>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p style={{ color: "#4E586E"}}>
                                    Currently helping to build the <a style={{ fontWeight: "bold" }} href="https://apply.pinchfinancial.com/welcome-page" target="_blank">Pinch fintech platform</a>, which redefines mortgage applications by connecting North America's top lenders and realtors with potential mortgage borrowers and insurance customers
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card" data-aos="fade-up" data-aos-duration="1000">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="orange-gradient">
                            <ExperienceCard company={fortranTrafficInfo}></ExperienceCard>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p style={{ color: "#4E586E"}}>
                                    Worked on Fortran's flagship intelligent transportation software, <a style={{ fontWeight: "bold" }} href="https://www.fortrantraffic.com/shop/its/aria/" target="_blank">ARIA</a>. Designed and deployed a module onto ARIA that remotely configures live traffic controllers around Ontario. Implemented user-facing components for ARIA's vehicle-to-everything (V2X) section.
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}


export default ExperienceComponent;