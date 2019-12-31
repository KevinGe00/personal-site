import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div id="footer-upper">
                <div class="container">
                    <h4 class="text-center">Get in touch with me!</h4>
                    <div class="row justify-content-center" id="footer-upper">
                        <div class="col-1">
                            <a href="https://www.github.com/KevinGe00">
                                <i class="fab fa-github fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                        <div class="col-1">
                            <a href="https://www.linkedin.com/in/ge-kevin">
                            <i class="fab fa-linkedin-in fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                               
                        <div class="col-1">
                            <a href="mailto:kevin.ge@mail.utoronto.ca">
                                <i class="fas fa-envelope-square fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                        <div class="col-1">
                            <a href="https://www.instagram.com/kevnge">
                                <i class="fab fa-instagram fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>

                    </div>
                </div>
                </div>
                <div class="text-center" id="footer-bottom">Made By Kevin Ge © 2019
          </div>


            </footer>

        )
    }
}

export default Footer;