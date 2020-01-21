import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from './me.JPG'

class AboutComponent extends Component {
    render() {
        return (
            <div class="container fill-screen-height font-roboto" id="about">
                <h1 class="center-text font-inherit title-margin">About me</h1>
                <div class="row">
                    <div class="col-sm-6">
                        <p id="about-text"><strong>Nice to meet you 👋, I'm Kevin!</strong>
                            <hr></hr>
                            I'm currently a second year computer science student at the University of Toronto.
                            When I'm not spending time on school, I'll be with friends, working out or spending time
                            curating my <a href="https://open.spotify.com/user/citatlon">Spotify playlists</a>. I built 
                            this website (in React<i class="fab fa-react"></i>) as way for people to get to know me better and to find out what I've done. So please, feel free 
                            to check out my projects below.
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