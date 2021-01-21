import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/pic2.png";
import "./about.style.css";
import Button from "react-bootstrap/Button";


const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container >
                <Row className="pt-3 pb-5 align-items-center">
                    {/* Profile Pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                        </Row>
                    </Col>
                    {/* About me description */}
                    <Col xs={12} md={6}>
                        <Row className="my-details p-2 align-items-start rounded">
                          Hello, Myself&nbsp;&nbsp;<strong>D. Lohith Bhargav</strong><ul><li>A Techie born and brought up in India.</li></ul>
                          <ul><li>I am RPA Developer &amp; Student Peer Mentor at University</li></ul>
                          <ul><li>Currently pursuing B-tech 4th year CSE at KLEF Deemed to be University.</li></ul>
                          <div><strong><br />Global Certifications :</strong>
                            <br />
                            <i>&nbsp;&nbsp;Automation Anywhere Certified Essentials</i><br />
                            <i>&nbsp;&nbsp;Automation Anywhere Certified Advanced</i><br />
                            <i>&nbsp;&nbsp;ServiceNow Certified System Administrator</i><br />
                            <i>&nbsp;&nbsp;UiPath RPA Developer Advanced</i>
                          </div>
                          <div>
                          <strong><br />Strengths:<br /></strong>Hardworking, Goal Oriented, Flexibility, Leadership.
                          <strong><br />Hobbies:<br /></strong> Youtuber, Photography, Video Editing, Playing AAA Pc Games. 
                          </div>
                          { /* button */}
                          <Col className="d-flex justify-content-center flex-wrap">
                          <div>
                              <a href="#contact" >
                                 <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                              </a>
                            </div>
                    <div>
                    <a href="https://drive.google.com/file/d/1jr8fup0yXLLZB8WdrR6xDLSFNI6Rp4cr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My CV
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/lohithbhargav" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/dlohithbhargav/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  </Col>
                </Row>
              </Col>
              </Row>
            </Container>
         </div>
      </div>
    );
};

export default About;
