import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

//Project Logo


// skills
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_C from "../../assets/img/skills/c.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_HIBERNATE from "../../assets/img/skills/hibernate.svg";
import L_SPRING from "../../assets/img/skills/springio.svg";
import L_AUTOMATION from "../../assets/img/skills/automation.svg";
import L_UIPATH from "../../assets/img/skills/uipath.svg";
import L_JSP from "../../assets/img/skills/jsp.svg";
import L_SERVLET from "../../assets/img/skills/servlet.svg";
import L_ORACLE from "../../assets/img/skills/oracle.svg";
import L_R from "../../assets/img/skills/rstudio.svg";

import "./projects-timeline.style.css";


const ProjectsTimeline = () => {
    return (
        <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
        <Events>
          {/* Project: Automation of Student Registration into Microsoft Teams using RPA */}
          <ImageEvent
            date="12/2020 - 01/2021"
            className="text-center"
            text="Student Registration into Microsoft Teams using RPA">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Developed bots to create private channels in Teams to add members into each of the channel.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It's a 3 step Process</li>
                          <li>1. Adding all Owners &amp; Members into Teams</li>
                          <li>2. Creation of Individual Priavte Channels</li>
                          <li>3. Adding Owners &amp; Members to corresponding Channels</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AUTOMATION}
                                alt="Automation Anywhere"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Automation Anywhere
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://youtube.com/playlist?list=PLh0t5-dffkJFF4SenAJ_K9elWOVOvzg4s"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
          {/* Project: Prediction of Signal Drop due to Rain at User Cellular Signal Reception */}
          <ImageEvent
            date="07/2020 - 12/2020"
            className="text-center"
            text="Prediction of Signal Drop due to Rain at User Cellular Signal Reception">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Developed a Model to predite the loss of Signal due to intensity of rain fall bots to create private channels in Teams to add members into each of the channel.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>We took 3 conditions to modeling the prediction like No Rain, Light Rain, Heavy Rain.</li>                     
                          <li>Evalution and Analysis of DataSet for Data Visualization.</li>
                          <li>Exploration of Mechanism.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Git"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                              <Image
                                src={L_R}
                                alt="R & R Studio"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              R Studio
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://projects.kluniversity.in/170030320/majorproject"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Complete Automated Exam Section Using RPA*/}
          <ImageEvent
            date="04/2020 - 06/2020"
            className="text-center"
            text="Complete Automated Exam Section Using RPA">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> In Online Exams Every Student have to upload pdfs for each section in exam, those pdfs have to gathered and merged into a single PDF for Proceed to Evaluation.                       <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It's just like an Enterprise Project, Process Below:</li>
                          <li>1. There will be few folders with all the written pdfs uploaded by students</li>
                          <li>2. Each student's associated pdfs in every folder has to be moved into a unique folder with student Regd No</li>
                          <li>3. Error CheckPoints are there at every steps of whole Process</li>
                          <li>4. All pdfs in Student's Unique Folders has to be merged and moved into Evaluation Folder</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AUTOMATION}
                                alt="Automation Anywhere"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Automation Anywhere
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Bot Generated Stock details Using RPA */}
          <ImageEvent
            date="03/2020"
            className="text-center"
            text="Bot Generated Stock details Using RPA">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Bot that can search a Stock and can Extract Details to an Excel and send this file via Mail to the corresponding Incharge.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>A Excel file which contains list of companies</li>
                          <li>Bot will search for the details of companies from Microsoft Money App </li>
                          <li>By Using OCR functionality data will be stored back into excel and mails to Others.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AUTOMATION}
                                alt="Automation Anywhere"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Automation Anywhere
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://youtu.be/tfLvp8KxyCQ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Permission Approval System */}
          <ImageEvent
            date="07/2019 - 09/2019"
            className="text-center"
            text="Permission Approval System">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The Theme is to develop a operation web page model of  permission approval of Employee in hierarchy of Employee, Leader, Manager. Employee send request that can be view by leader and manager and can accept/ reject that should be updated and registration, login details have to be handled.            <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Three Modules & Registration Page</li>
                          <li>Employee Module</li>
                          <li>Leader Module</li>
                          <li>Manager Module</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_ORACLE}
                                alt="Oracle 10G"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ORACLE 10G
                            </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java SE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JDBC
                            </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_SERVLET}
                                alt="SERVLET"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              SERVLET
                            </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_JSP}
                                alt="JSP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JSP
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/lohithbhargav/Permission-Approval-System"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: School Admissions System Using Java */}
          <ImageEvent
            date="09/2018 - 10/2018"
            className="text-center"
            text="School Admissions System Using Java">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The project is to manage the fee collection from the students of a school. This Project consists of 4 modules like Fee Payments, Maintain fee concessions, Maintains Scholarship, Help Desk.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The Fee Payments and details of the payments will be listed that are made by the students.</li>
                          <li>The concession fee which has provided to students will be modified.</li>
                          <li>The Scholarship provided by school to the student will be generated.</li>
                          <li>The student yet to pay fee will be listed and other info.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java SE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java SE
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/lohithbhargav/School-Admissions-System-Using-Java"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Looking Up Passwords Using Java */}
          <ImageEvent
            date="10/2018"
            className="text-center"
            text="Looking Up Passwords Using Java">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Design for an authenticating a user’s password. One possible way to implement is using a file to store computer user login usernames and passwords. The program will then present a login prompt, read one username, present a password prompt, and after looking up the username's password in the hash table, will print either "Authentication successful" or "Authentication failure".  
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The program is to login prompt, and check whether “Authentication successful” or “Authentication failure”.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java SE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java SE
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div> 
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/lohithbhargav/Looking-Up-Passwords"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
        </Timeline>
        </div>
    )
}

export default ProjectsTimeline
