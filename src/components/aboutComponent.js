import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AboutComponent extends Component {
    render() {
        return (
            <div class="jumbotron fill-screen-height" id="about">
                <h1 class="center-text font-inherit">About me</h1>
                <p class="lead">Hi, I'm Kevin! I'm currently a second year computer science student at the Univeristy of Toronto.</p>
                <p>Lorem ipsum dolor sit amet, eam ubique commodo euismod cu, maiorum detraxit id vim, pri hinc temporibus ut. Vis sonet tacimates cu, mea te affert scribentur consectetuer. Stet pertinacia ex est, eam cu esse illud singulis. Mei id maiestatis adversarium, pri brute oporteat democritum ne.
                        Te duo putent laoreet, nam id nibh offendit corrumpit. An timeam contentiones has, et has affert recteque, eum purto voluptua eleifend ei. His fastidii verterem abhorreant cu, noluisse salutandi iudicabit eu eum, sit esse apeirian ut. Summo scaevola partiendo nam no, vim ut nulla graecis constituto, ei eos nisl quot civibus. Sea no sint albucius mandamus, error elaboraret sit ad. An quo quem iisque oportere. Mazim tibique ancillae nam at, nihil iriure eloquentiam in vel.
                </p>
                <div class="arrow-container">
                    <a href="#full">
                        <div class="arrow"></div>
                    </a>
                </div>
                <div id="full"></div>
            </div>
        )
    }
}


export default AboutComponent;