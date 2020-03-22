import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import IconLocation from "react-icons/lib/md/location-on";
import IconPhone from "react-icons/lib/ti/device-phone";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./SubComponents/Footer";

export default function Contact() {
  return (
    <div className="Contact">
      <Container>
        <Row className="justify-content-center">
          <h1>Get in Touch</h1>
        </Row>
        <Row>
          <Col sm={5}>
            <Row>
              <Col sm={2}>
                <IconLocation className="float-right display-4" />
              </Col>
              <Col sm={6} className="float-left lead">
                <p> LCO Basketball Ground,</p>
                <p>55 - Fictional Homes, </p>
                <p>Fictional Road Near </p>
                <p>Fictional Lake.</p>
                <p>India.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <IconPhone className="float-right  display-4" />
              </Col>
              <Col sm={6} className="float-left lead">
                <p>+91999999999</p>
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"  required/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Meassage</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder='Your Message' required/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </div>
  );
}
