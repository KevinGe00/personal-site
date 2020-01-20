import React, { Component } from 'react';
import SpotifyImage from './spotify.png';
import fmscImage from './findmywhip.png';
import RobodropperImage from './robodropperpics/2.jpg';
import DesperadoImage from './desperadopics/1.png'

class ProjectsComponent extends Component {
    render() {
        return (

            <div class="container" id="projects">

                <h1 class="center-text font-inherit">PROJECTS</h1>
                {/* row 1 */}
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={SpotifyImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Spotify Playlist Personalizer</strong></h5>
                            <p class="card-text">A web app that takes in an input playlists and generates a personalized playlist directly onto the user's Spotify library.
                            The app filters through the input playlist and filters for songs by artists that the user listens to (data from Spotify's API).
                            </p>
                            
                            <a href="https://github.com/KevinGe00/SpotifyPlaylistPersonalizer" class="btn btn-primary">Code on Github <i class="fab fa-github"></i></a>
                
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={fmscImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Find My SmartCar</strong></h5>
                            <p class="card-text">A web app that helps connected car owners find their car using live location data from Smartcar's API.</p>
                            <a href="https://github.com/KevinGe00/FindMyWhip" class="btn btn-primary">Code on Github <i class="fab fa-github"></i></a>
                        </div>
                    </div>

                </div>
                {/* row 2 */}
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={RobodropperImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Robot Seed Planter</strong></h5>
                            <p class="card-text">A programmable seed-planting robot built with custom Arduino boards. Winner <i class="fas fa-award"></i> and judge favorite at the Pueblo Science Hackathon for Science Education. </p>
                            <a href="https://www.artsci.utoronto.ca/news/hackathon-science-education-hacking-better-world" class="btn btn-primary">News Article <i class="fas fa-newspaper"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={DesperadoImage} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Desperado</strong></h5>
                            <p class="card-text">A multi levelled wild west themed Android game.</p>
                            <a href="https://github.com/KevinGe00/Desperado-AndroidGame" class="btn btn-primary">Code on Github <i class="fab fa-github"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjectsComponent;