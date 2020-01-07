import React, { Component } from 'react';
import SpotifyImage from './spotify.png';
import fmscImage from './findmywhip.png';
import RobodropperImage from './robodropperpics/2.jpg';
import DesperadoImage from './desperadopics/1.png'

class ProjectsComponent extends Component {
    render() {
        return (
            
            <div class="container" id="projects">

                <h1 class="center-text">Projects</h1>
                {/* row 1 */}
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={SpotifyImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Spotify Playlist Personalizer</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="https://github.com/KevinGe00/SpotifyPlaylistPersonalizer" class="btn btn-primary">Github <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={fmscImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Find My SmartCar</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                {/* row 2 */}
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={RobodropperImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Robot Seed Planter</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="https://www.artsci.utoronto.ca/news/hackathon-science-education-hacking-better-world" class="btn btn-primary">News Article</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={DesperadoImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Desperado - Android Game</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjectsComponent;