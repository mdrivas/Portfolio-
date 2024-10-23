import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg"; // Make sure to update this path
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a tech enthusiast passionate about creating innovative solutions that make a real difference in people's lives.
              <br />
              <br />
              My experience with <i><b className="purple">Commure + Athelas</b></i> in the healthcare sector has highlighted the transformative power of technology in patient care.
              This work has reinforced my belief in <i><b className="purple">accessible and equitable healthcare</b></i>, driving my passion to innovate and improve medical outcomes through technology.
              <br />
              <br />
              I'm fascinated by the intersection of &nbsp;
              <i>
                <b className="purple">technology, healthcare, and sports</b>
              </i>
              . This drives my interest in applying
              <i>
                <b className="purple"> Bayesian statistics to sports analytics</b>
              </i>
              , as well as using data science to improve medical outcomes.
              <br />
              <br />
              Beyond tech, I'm an avid language learner, conversational in 6 languages while currently exploring
              <i>
                <b className="purple"> Portuguese and Cantonese</b>
              </i>
              . I believe understanding different languages and cultures is crucial in creating globally accessible solutions, regardless of industry.
              <br />
              <br />
              I enjoy applying my skills in
              <i>
                <b className="purple"> Python, Flask, React, and cloud technologies </b>
              </i>
              to develop solutions that bridge gaps in healthcare access, enhance sports performance analysis, and push the boundaries of what's possible in tech.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="profile-photo-wrapper">
                <img src={myImg} className="img-fluid profile-photo" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mdrivas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mattheos-drivas-803188276/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
