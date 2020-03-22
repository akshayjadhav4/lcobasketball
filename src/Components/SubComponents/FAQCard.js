import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default function FAQ(props) {
  return (
    <div>
        <Row className="justify-content-center">
          <Col sm={10}>
            <Accordion defaultActiveKey="1" className="neoFAQ">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="button" eventKey="0">
                    <h4>{props.question} </h4>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{props.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          
        </Row>
        <br/>
        <br/>
    </div>
  );
}

