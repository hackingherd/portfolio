import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kondasani Malathi </span>
            from <span className="purple"> Sri Sathya Sai, AP, India.</span>
            <br />
            I am currently seeking for an oppurtunity to use my knowledge.
            <br />
            I am pursuing Bachelour of Technology at Rajeev Gandhi Memorial College of Engineering and Technology,
            Nandyal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kondasani Malathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
