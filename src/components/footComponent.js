import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">

                <div id="footer-upper">
                    <div class="container">
                        <h4 class="text-center grey-italic-text">Get in touch with me! ... or check out my music?</h4>
                        <div class="row justify-content-center" id="footer-upper">
                            {/* email */}
                            <div class="col-1 logo">
                                <a href="https://www.instagram.com/kevnge">
                                    <i class="fab fa-instagram fa-2x white"> </i>
                                </a>
                            </div>
                            {/* github */}
                            <div class="col-1 logo">
                                <a href="https://www.github.com/KevinGe00">
                                    <i class="fab fa-github fa-2x white"> </i>
                                </a>
                            </div>
                            {/* linkedin */}
                            <div class="col-1 logo">
                                <a href="https://www.linkedin.com/in/ge-kevin">
                                    <i class="fab fa-linkedin-in fa-2x white"> </i>
                                </a>
                            </div>
                            {/* email */}
                            <div class="col-1 logo">
                                <a href="mailto:kevin.ge@mail.utoronto.ca">
                                    <i class="fas fa-envelope-square fa-2x white"> </i>
                                </a>
                            </div>
                            {/* spotify */}
                            <div class="col-1 logo">
                                <a href="https://open.spotify.com/user/citatlon">
                                    <i class="fab fa-spotify fa-2x white"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="white-line"></hr>
                <div class="text-center grey-italic-text" id="footer-bottom">Made By Kevin Ge © 2019
          </div>


            </footer>

        )
    }
}

export default Footer;