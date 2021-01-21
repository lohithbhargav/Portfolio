import React from 'react';
import  Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from 'react-tilt';
import Container from "react-bootstrap/Container";
import "./experience.style.css";
import Card from "react-bootstrap/Card";
import bg from "../../assets/img/experience/download.png";

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" className="img-resize" src={ bg } alt="K L University" />
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">RPA Developer</Card.Title>
                        </div>
                        <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Automation Anywhere Developer</strong>
                    <br />
                    <strong>Tools:</strong> Automation Anywhere Enterprise & Cloud(Community eariler) Edition
                    <br />
                    <strong>Duration:</strong> Apr 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <ul><li><strong>Developed </strong> Bots for solving tasks of high volume pertains to University.</li></ul>
                      <ul><li><strong>Designed &amp; Developed </strong> Bots for <strong>Projects &amp; Tasks:</strong> </li></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Complete Automation of Exam Section</i><br /></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Automation of Student Registration into Microsoft Teams</i><br /></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Bot Generated Stock Details</i><br /></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Conversion of Excel Question Banks into XML files</i><br /></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Generation of CSV files from a Excel</i><br /></ul>
                      <ul><i>&nbsp;&nbsp;:&gt; Filtering of Individual Course Students to Excel from Huge Students List</i></ul>
                    </ul>
                  </Card.Text>
                </div>
                </Card.Body>
                </Card>
                </Tilt>
                </Container>
            </Jumbotron>


            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" className="img-resize" src={ bg } alt="K L University" />
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">Student Peer Mentor</Card.Title>
                        </div>
                        <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Robotic Process Automation</strong>
                    <br />
                    <strong>Applications:</strong> Automation Anywhere Enterprise & Cloud(Community eariler) Edition
                    <br />
                    <strong>Duration:</strong> March 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>POC &amp; Assisted </strong>	Students in different ways of solving Practical Labs.</li>
                      <li><strong>Trained</strong> Two batch in Solving the Assignments of RPA Training.
                      </li>
                      <li><strong>Creating &amp; Presentation </strong> Video Content at Training &amp; Sessions at RPA Club as Technical Lead. 
                      </li>
                      <li><strong>Link</strong> for <a href="https://shorturl.at/opY12">Video Contents</a> at Training &amp; Presentation.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
                </Card.Body>
                </Card>
                </Tilt>
                </Container>
            </Jumbotron>

        </div>
    );
};

export default Experience
