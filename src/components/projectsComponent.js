import React, { Component } from 'react';

class ProjectsComponent extends Component {
    render() {
        return (
            <div class="container" id="projects">
                <h1 class="center-text">Projects</h1>
                {/* <div class="row justify-content-around">
                    <div class="card col-sm" style={{
                        width: "18rem%"
                    }}>
                        <img class="card-img-top" src="https://lh3.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A=s360-rw" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Project 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card text-white bg-info col-sm" style={{
                        width: "18rem%"
                    }}>
                        <img class="card-img-top" src="https://lh3.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A=s360-rw" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Project 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div> */}
                <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

</div>
                </div>
        )
    }
}

export default ProjectsComponent;