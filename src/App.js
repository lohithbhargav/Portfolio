import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component"
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import Experience from './pages/experience/experience.component'
import Slide from 'react-reveal/Slide';

import Particles from "react-particles-js";
import { particlesOptions } from "./themes/particlesOptions";
// components
import Skills from './pages/skills/skills.component'
import ProjectsTimeline from './pages/projects-timeline/projects-timeline.component';
import Contact from './pages/contact-form/contact-form.component';

import FooterPanel from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavbar />
      
        <MyCarousal />
        <TitleMessage />
        <Particles className="particles particles-box" params={particlesOptions} />
        {/* about me section */}
        <div>
          <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/background/background.webp")} bgImageAlt="" strength={-200} >
          <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
          </div>
          </Parallax>
        </div>
        {/* skills */}
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
            <hr /> 
            <Skills />
            </Slide>
          </Container>
        </div>

        {/* Experience */}
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr /> 
              <Experience />
            </Fade>
          </Container>
        </div>

        {/* Project */}
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr /> 
              <ProjectsTimeline />
            </Slide>
          </Container>
        </div>

        {/* Contact */}
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr /> 
              <Contact />
            </Fade>
          </Container>
        </div>

        {/* Contact */}
        {/*<div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr /> 
              <FooterPanel />
            </Fade>
          </Container>
        </div>*/}

      <hr />
      <FooterPanel />

    </div>);
};

export default App;
