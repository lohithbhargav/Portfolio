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
// components
import Skills from './pages/skills/skills.component'

const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavbar />
        <MyCarousal />
        <TitleMessage />
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
            <Slide bottom duration={500}>
              <hr /> 
              <Experience />
            </Slide>
          </Container>
        </div>

    </div>);
};

export default App;
