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
                        <Card.Img variant="top" className="img-resize" src={ bg } alt="Accenture logo" />
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">RPA Developer</Card.Title>
                        </div>
                        <Card.Text>

                        </Card.Text>

                        </Card.Body>

                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Experience
