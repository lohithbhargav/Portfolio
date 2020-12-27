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
              {/*  <Image src={ Bg } thumbnail /> */}
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
                            Myself <strong>&nbsp; D. Lohith Bhargav</strong> 
                            <br />Currently pursuing Btech 4th year CSE at KLEF Deemed to be University.
                            <br />I am currently assisting students in RPA as Student Peer Mentor.
                            <br />Trained two batches in solving the assignments of RPA with video content creation and presentation.
                            <br />Developed bots for solving complex tasks to University.
                            <br />I am currently certified at Automation Anywhere Certified Essentials, Automation Anywhere Certified Advanced, ServiceNow Certified System Administrator, UiPath RPA Developer Advanced, Oracle Autonomous Database Cloud 2019 Certified Specialist and Java Enterprise Certification Course.
                            <br />My Strengths are Hardworking, Goal Oriented, Flexibility, Leadership.
                            <br />My Hobbies are Youtuber, Video Editing, Playing AAA Pc Games. 
                            <br />
                            { /* button */}
                            <Col className="d-flex justify-content-center flex-wrap">
                             <div>
                                 <a href="#contact" >
                                 <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                 </a>
                             </div>
                    <div>
                    <a href="https://drive.google.com/file/d/1PQUijN8cceWl-sbk9C-_my3J0jqQOh9D/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
