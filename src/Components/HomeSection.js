import React from "react";
import Button from "react-bootstrap/Button";
import RunnerImg from "../Assets/images/Runner.png";
import "../App.css";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeSection() {
  return (
    <div className='Home'>
      <Container style={{overflow: 'hidden'}}>
        <Row>      
          <Col sm={6} text-right>
            <div className="cardcontainer">
              <img src={RunnerImg} style={{ maxWidth: '100%', height: 'auto' }} alt=""/>
            </div>
          </Col>
          <Col sm={4}>
            <div className="content">
              <h1 style={{fontSize: 80}}>Go fight for <br/> it team.</h1> 
              <p>Amazing Basketball Tournament</p>
              <Link to='/tournament'>
              <Button variant="outline-warning" className="button">
                Explore
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
