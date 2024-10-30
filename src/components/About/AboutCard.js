import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple">Mattheos Drivas </span>
            from <span className="purple">New York, New York.</span>
            <br />
            <br />
            I'm currently pursuing a <span className="purple">Master of Science in Electrical Engineering and Computer Science</span> at Chapman University, building upon my <span className="purple">Bachelor of Science in Computer Science with a Minor in Spanish</span> from the same institution.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor sports like Skiing and Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Innovation is not just about technology; it's about improving lives and bridging cultural gaps."
          </p>
          <footer className="blockquote-footer">Mattheos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
