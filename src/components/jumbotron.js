import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron" id="jumbotron">
                <h1 class="display-4">Hello, I'm Kevin!</h1>
                <p class="lead">I'm currently a second year computer science student at the Univeristy of Toronto.</p>
            </div>
        )
    }

}

export default Jumbotron;