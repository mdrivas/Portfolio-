import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speakeasy from "../../Assets/Projects/speakeasy.png";
import braille from "../../Assets/Projects/research.png";
import ankleBrace from "../../Assets/Projects/brace.png";
import ppe from "../../Assets/Projects/PPE.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speakeasy}
              isBlog={false}
              title="Speakeasy"
              description="Built a full stack language learning app using React, Flask, Firebase, and WebRTC for real-time communication. Integrated Firebase Authentication and RESTful APIs for secure, scalable user management. Designed responsive UI/UX with React hooks, improving state management and engagement."
              ghLink="https://github.com/LearnSpeakeasy/speakeasy"
              demoLink="https://speakeasy-c3d76.web.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={braille}
              isBlog={false}
              title="Braille Display for STEM Education"
              description="Collaborated with a team of 8 on a cost-effective Braille display to enhance STEM education for the visually impaired. Developed a Google Chrome extension that converts images to an 8x8 binary form for use on the Braille device. Implemented image processing techniques for accurate shape representation on the tactile display."
              researchLink="https://etezad-lab.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ankleBrace}
              isBlog={false}
              title="Custom 3D-Printed Ankle Brace"
              description="Led a team of 4 in prototyping and designing a customizable multi-material 3D-printed ankle brace. Presented the project as an invited speaker for Science on Tap, a public engagement event, to an audience of 40. Conducted material strength testing on 3D-printed composite materials using Instron Machine."
              newsLink="https://blogs.chapman.edu/gci/2023/05/09/creating-a-customizable-multi-material-3d-printed-ankle-brace/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppe}
              isBlog={false}
              title="Medical Protective Equipment Design and Distribution"
              description="Designed, manufactured, and distributed 900+ units of medical PPE including face shields, intubation boxes, and face mask clips to frontline healthcare workers in California, New York, and Washington State. Raised $3,000 on GoFundMe to support production and distribution costs."
              newsLink="https://news.chapman.edu/2020/04/13/3d-printers-whir-to-life-producing-face-shields-for-medical-workers/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
