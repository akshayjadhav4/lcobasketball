import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default function TournamentCard(props) {
  return (
    <div className="neoTournament">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>

        <Row>
          <Col>
            <Card.Subtitle>Day: {props.day}</Card.Subtitle>
          </Col>
          <Col>
            <Card.Subtitle>Time: {props.time}</Card.Subtitle>
          </Col>
        </Row>
        <Button variant="warning">Book</Button>
      </Card.Body>
    </div>
  );
}
