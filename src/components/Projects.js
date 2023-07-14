import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hotel booking website",
      description: "Made using MERN web technologies",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio Website",
      description: "Made using React and other frontend technologies",
      imgUrl: projImg2,
    },
    {
      title: "Codepen editor",
      description: "Made using React",
      imgUrl: projImg3,
    },
    {
      title: "Space buster game",
      description: "Made using Unity3d",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The best way to showcase our skills is by building projects<br></br>Some of the projects I have made using my knowledge and learning are: </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    

                   
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I have build a hotel booking website with features like : homepage, landing page, payment gateway, booking preferences. This is a full stack MERN project<br></br>The second project is Portfolio website which shows my development skills as well as my Resume. <br></br>The third project is a code editor where one can write html,css and JS code. <br></br> The fourth project is all about game development. I have made an interesting game using Unity3d platform. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}