import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from './me.JPG'

class AboutComponent extends Component {
    render() {
        return (
            <div class="container fill-screen-height font-roboto" id="about">
                <div class="row">
                    <div class="col-sm-6">
                        <p id="about-text"><strong>Nice to meet you 👋, I'm Kevin!</strong>
                            <hr></hr>
                            I'm about to enter my third year as a computer science student at the University of Toronto. When I'm not spending time on school or work, I'll be with friends, working out or spending time
                            curating my <a class="about-link" href="https://open.spotify.com/user/citatlon" target="_ ">Spotify playlists</a>. I built
                            this website (in React<i class="fab fa-react"></i>) as a way for people to get to know me better and to find out what I've done. So please, feel free
                            to check out my projects below.
                            <Row className="justify-content-center" style={{ marginTop: "15%" }}>
                                <a class="white" href='https://drive.google.com/file/d/1HbDSBylmFsUSFT0LFgke2JZyKsaF9M0E/view?usp=sharing' target="_ ">
                                    <Button variant="secondary">
                                        Resume
                                    </Button>
                                </a>
                            </Row>

                        </p>
                    </div>
                    <div class="col-sm-6">
                        <img src={me} id="me"></img>
                    </div>
                </div>

            </div>
        )
    }
}


export default AboutComponent;