import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";


const Contact = () => {
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
              <a href="mailto:dlohithbhargav28@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="dlohithbhargav28@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="www.linkedin.com/in/dlohithbhargav" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/lohithbhargav" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My Projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/c/LOHITHBHARGAVTechchannel" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="My Channel">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/LohithBhargav" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            {/*<div className="m-2">
              <a href="https://www.facebook.com/akjha132" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>*/}
          </Col>
        </Row>
        </Jumbotron>
        </div>
    )
}

export default Contact
