import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <FaGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {props.newsLink && (
          <Button 
            variant="primary" 
            href={props.newsLink} 
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <BiNews /> &nbsp;
            {"News Article"}
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <MdLiveTv /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {props.researchLink && (
          <Button
            variant="primary"
            href={props.researchLink}
            target="_blank"
          >
            <FaSearch /> &nbsp;
            {"Our Research"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
